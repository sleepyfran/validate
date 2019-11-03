import Step, {
    ConditionExpression,
    OperatorExpression,
    ValidationExpression,
} from './types/step'
import { Result, ValidationError } from './types/result'
import createResult from './expressions/result'
import {
    isConditionExpression,
    isOperatorExpression,
    isValidationExpression,
    skip,
} from './utils'
import { ParserState, PropertyResult } from './types/parser'

const hasError = (propertyResult: PropertyResult) => propertyResult.errored
const hasErrors = (state: ParserState) => state.some(step => hasError(step[1]))

const parseValidationExpression = (
    state: ParserState,
    expression: ValidationExpression,
): ParserState => {
    return [
        ...state,
        [
            expression.property,
            {
                errored: !expression.fulfillsValidation,
                message: expression.message,
                code: expression.code,
            },
        ],
    ]
}

const parseConditionExpression = (
    state: ParserState,
    expression: ConditionExpression,
): ParserState => {
    return expression.applyValidations ? state : []
}

const parseAndOperator = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): ParserState => {
    const tail = skip(steps, currentIndex)
    const tailState = parseSteps(tail)

    return state.concat(tailState)
}

const parseOrOperator = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): ParserState => {
    const tail = skip(steps, currentIndex)
    const tailState = parseSteps(tail)

    return hasErrors(state)
        ? hasErrors(tailState)
            ? state.concat(tailState)
            : tailState
        : state
}

const parseOperatorExpression = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): ParserState => {
    const operatorState =
        expression.type === 'and'
            ? parseAndOperator(state, expression, steps, currentIndex)
            : parseOrOperator(state, expression, steps, currentIndex)

    return [...state, ...operatorState]
}

const parseSteps = (steps: Step[]): ParserState => {
    const initialState: ParserState = []

    return steps.reduce((state, step, index) => {
        const expression = step.expression

        if (isValidationExpression(expression)) {
            return parseValidationExpression(state, expression)
        }

        if (isConditionExpression(expression)) {
            return parseConditionExpression(state, expression)
        }

        if (isOperatorExpression(expression)) {
            return parseOperatorExpression(state, expression, steps, index)
        }

        return initialState
    }, initialState)
}

/**
 * Creates a result from an input and a list of validation steps.
 *
 * @param input Input that was given to the validator.
 * @param steps Steps produced during the validation process.
 */
export const parse = <T>(input: T, steps: Step[]): Result<T> => {
    const parsedSteps = parseSteps(steps)

    const validationErrors: ValidationError[] = parsedSteps
        .filter(step => hasError(step[1]))
        .map(([property, error]) => ({
            message: error.message,
            code: error.code,
            property,
        }))

    return createResult(input, validationErrors)
}
