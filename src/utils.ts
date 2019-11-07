import Step, {
    ConditionExpression,
    Expression,
    ValidationExpression,
} from './types/step'

/**
 * Returns the given name if it's not empty; otherwise returns a default "The
 * input" message.
 *
 * @param propertyName Property name to check and return.
 */
export const propertyNameOrDefault = (propertyName: string) =>
    propertyName.length === 0 ? 'The input' : propertyName

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
 * Returns a clone of the given expression with the message updated.
 *
 * @param expression Expression to update.
 * @param message Message to insert into the expression.
 */
export const updateMessage = (
    expression: ValidationExpression,
    message: string,
): ValidationExpression => {
    return {
        ...expression,
        message,
    }
}

/**
 * Returns a clone of the given expression with the code updated.
 *
 * @param expression Expression to update.
 * @param code Code to insert into the expression.
 */
export const updateCode = (
    expression: ValidationExpression,
    code: number | string,
): ValidationExpression => {
    return {
        ...expression,
        code,
    }
}

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
 * @param message Indicates the default message that will be showed
 * if not `withMessage` was provided.
 */
export const addValidationStep = (
    steps: Step[],
    propertyName: string,
    fulfillsValidation: boolean,
    message: string,
): Step[] =>
    addStep(steps, {
        kind: 'validation',
        property: propertyName,
        fulfillsValidation,
        message,
    })

/**
 * Returns a new array skipping from 0 to `times` items.
 *
 * @param array Array to modify.
 * @param times Number of times to skip elements.
 */
export const skip = <T>(array: T[], times: number): T[] =>
    array.slice(times, array.length)
