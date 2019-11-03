import Step, {
    ConditionExpression,
    InfoExpression,
    OperatorExpression,
    ValidationExpression,
} from './types/step'
import { Result, ValidationError } from './types/result'
import createResult from './expressions/result'
import {
    isConditionExpression,
    isInfoExpression,
    isOperatorExpression,
    isValidationExpression,
    skip,
} from './utils'
import { ParserState } from './types/parser'

const hasErrors = (errors: [string, boolean][]) => errors.some(err => err[1])

const parseValidationExpression = (
    state: ParserState,
    expression: ValidationExpression,
): ParserState => {
    return {
        ...state,
        propertyResult: [
            ...state.propertyResult,
            [expression.property, expression.fulfillsValidation],
        ],
    }
}

const parseConditionExpression = (
    state: ParserState,
    expression: ConditionExpression,
): ParserState => {
    return {
        ...state,
        propertyResult: expression.applyValidations ? state.propertyResult : [],
    }
}

const parseInfoExpression = (
    state: ParserState,
    expression: InfoExpression,
): ParserState => {
    return {
        ...state,
    }
}

const parseAndOperator = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): [string, boolean][] => {
    const tail = skip(steps, currentIndex)
    const tailState = parseSteps(tail)

    return state.propertyResult.concat(tailState.propertyResult)
}

const parseOrOperator = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): [string, boolean][] => {
    const tail = skip(steps, currentIndex)
    const tailState = parseSteps(tail)

    return hasErrors(state.propertyResult)
        ? hasErrors(tailState.propertyResult)
            ? state.propertyResult.concat(tailState.propertyResult)
            : tailState.propertyResult
        : state.propertyResult
}

const parseOperatorExpression = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): ParserState => {
    return {
        ...state,
        propertyResult:
            expression.type === 'and'
                ? parseAndOperator(state, expression, steps, currentIndex)
                : parseOrOperator(state, expression, steps, currentIndex),
    }
}

const parseSteps = (steps: Step[]): ParserState => {
    const initialState: ParserState = {
        propertyResult: [],
    }

    return steps.reduce((state, step, index) => {
        const expression = step.expression

        if (isValidationExpression(expression)) {
            return parseValidationExpression(state, expression)
        }

        if (isConditionExpression(expression)) {
            return parseConditionExpression(state, expression)
        }

        if (isInfoExpression(expression)) {
            return parseInfoExpression(state, expression)
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

    const validationErrors: ValidationError[] = parsedSteps.propertyResult
        .filter(err => !err[1])
        .map(err => ({
            property: err[0],
        }))

    return createResult(input, validationErrors)
}
