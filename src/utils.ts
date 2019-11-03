import Step, {
    ConditionExpression,
    Expression,
    InfoExpression,
    OperatorExpression,
    ValidationExpression,
} from './types/step'

/**
 * Checks if the input is a string.
 *
 * @param input Input to check.
 */
export const isString = (input: any): input is string =>
    typeof input === 'string'

/**
 * Checks if the input is a number.
 *
 * @param input Input to check.
 */
export const isNumber = (input: any): input is number =>
    typeof input === 'number'

/**
 * Checks if the input is a date.
 *
 * @param input Input to check.
 */
export const isDate = (input: any): input is Date => input instanceof Date

/**
 * Checks if the input is a collection.
 *
 * @param input Input to check.
 */
export const isCollection = (input: any): input is any[] => Array.isArray(input)

/**
 * Checks if the input is an object.
 *
 * @param input Input to check.
 */
export const isObject = (input: any): input is object =>
    typeof input === 'object'

/**
 * Checks if the expression is a validation expression.
 *
 * @param expression Expression to check.
 */
export const isValidationExpression = (
    expression: Expression,
): expression is ValidationExpression => expression.kind === 'validation'

/**
 * Checks if the expression is a condition expression.
 *
 * @param expression Expression to check.
 */
export const isConditionExpression = (
    expression: Expression,
): expression is ConditionExpression => expression.kind === 'condition'

/**
 * Checks if the expression is an info expression.
 *
 * @param expression Expression to check.
 */
export const isInfoExpression = (
    expression: Expression,
): expression is InfoExpression => expression.kind === 'info'

/**
 * Checks if the expression is an operator expression.
 *
 * @param expression Expression to check.
 */
export const isOperatorExpression = (
    expression: Expression,
): expression is OperatorExpression => expression.kind === 'operator'

/**
 * Creates a new step based on the given expression and combines it with the
 * current list of steps.
 *
 * @param steps Current list of steps.
 * @param expression New expression to add to the list.
 */
export const addStep = (steps: Step[], expression: Expression): Step[] => {
    return [
        ...steps,
        {
            expression,
        },
    ]
}

/**
 * Calls `addStep` with a validation step.
 *
 * @param steps Current list of steps.
 * @param propertyName Name of the property being validated.
 * @param fulfillsValidation Whether or not the validation was successful.
 */
export const addValidationStep = (
    steps: Step[],
    propertyName: string,
    fulfillsValidation: boolean,
): Step[] =>
    addStep(steps, {
        kind: 'validation',
        property: propertyName,
        fulfillsValidation,
    })

/**
 * Returns a new array skipping from 0 to `times` items.
 *
 * @param array Array to modify.
 * @param times Number of times to skip elements.
 */
export const skip = <T>(array: T[], times: number): T[] =>
    array.slice(times, array.length)
