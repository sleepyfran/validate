import { Result } from './result'

/**
 * Defines the end of a validation chain. Allows to retrieve the result of
 * the validation or define error messages and codes or refine the conditions
 * of the validation.
 */
export default interface ValidationEnd<T> {
    /**
     * Apply the validation only if the given condition is met.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    when(condition: (input: T) => boolean): ValidationEnd<T>

    /**
     * Apply the validation unless the given condition is met.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    unless(condition: (input: T) => boolean): ValidationEnd<T>

    /**
     * Adds an error code to the validation.
     *
     * @param code Error code to add to the validation.
     */
    withCode(code: string): ValidationEnd<T>
    withCode(code: number): ValidationEnd<T>

    /**
     * Adds an error message to the validation.
     *
     * @param message Error message to add to the validation.
     */
    withMessage(message: string): ValidationEnd<T>

    /**
     * Returns the result of the validation.
     */
    result(): Result<T>
}
