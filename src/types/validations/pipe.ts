import ValidationOf from './of'

/**
 * Utility function to pipe a series of validations and combine them into one
 * result. This executes each of the validations calling `result()` and then
 * combines them using `combineWith`, which combines the error messages and
 * returns whatever object the last validation parameter was holding.
 *
 * @param validations Validations to apply and combine.
 */
export const pipe = <T>(...validations: ValidationOf<T>[]) =>
    validations
        .map(val => val.result())
        .reduce((prev, curr) => prev.combineWith(curr))
