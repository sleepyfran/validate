import { Result } from '../result'

/**
 * Defines the possible operators after a validation chain has ended.
 */
export default interface ChainEnd<T> {
    /**
     * Returns the result of the validation.
     */
    result(): Result<T>
}
