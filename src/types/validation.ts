import ValidationOf from './validation-of'

/**
 * Entry point of the validator.
 */
export default interface Validation {
    /**
     * Returns a `ValidationOf` implementation that allows to apply different
     * validations over `T`. If `T` has an specific `ValidationOf_` like
     * `ValidationOfString` or `ValidationOfArray` then that specific type
     * will be returned instead of the general one.
     */
    of<T>(input: T): ValidationOf<T>
}
