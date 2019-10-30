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
