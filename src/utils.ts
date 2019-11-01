import Step, { Expression, OperatorExpression } from './types/step'

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
 * @param fulfillsValidation Whether or not the validation was successful.
 */
export const addValidationStep = (
    steps: Step[],
    fulfillsValidation: boolean,
): Step[] => addStep(steps, { kind: 'validation', fulfillsValidation })
