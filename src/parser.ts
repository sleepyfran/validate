import Step, { ConditionExpression, ValidationExpression } from './types/step'
import { Result, ValidationError } from './types/result'
import createResult from './expressions/result'
import { isConditionExpression, isValidationExpression } from './utils'
import { ParserState, PropertyResult } from './types/parser'

const hasError = (propertyResult: PropertyResult) => propertyResult.errored

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

const parseSteps = (steps: Step[]): ParserState => {
    const initialState: ParserState = []

    return steps.reduce((state, step) => {
        const expression = step.expression

        if (isValidationExpression(expression)) {
            return parseValidationExpression(state, expression)
        }

        if (isConditionExpression(expression)) {
            return parseConditionExpression(state, expression)
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
