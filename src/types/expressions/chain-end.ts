import { Result } from '../result'

/**
 * Defines the possible operators after a validation chain has ended.
 */
export default interface ChainEnd<T> {
    /**
     * Combines the current result with another one. This only combines error
     * validation states and returns whatever object was given to the parameter's
     * result.
     *
     * @param result Result to combine with the current one.
     */
    combineWith<U>(result: Result<U>): Result<U>

    /**
     * Same as `combineWith` but returns the object contained in the current
     * Result rather than the parameter's one.
     *
     * @param result Result to combine with the current one.
     */
    combineWithLeft<U>(result: Result<U>): Result<T>

    /**
     * Returns the result of the validation.
     */
    result(): Result<T>
}
