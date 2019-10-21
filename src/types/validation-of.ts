import ValidationEnd from './validation-end'
import ValidationWith from './validation-with'

/**
 * A set of applicable validations that have the base object already applied.
 */
export default interface ValidationOf<T> {
    /**
     * Applies the validations following the `with` call only to the specified
     * property.
     * @param property Property to apply the following validations.
     */
    with<K extends keyof T>(property: K): ValidationWith<T[K]>

    /**
     * Apply the validation only if the given condition is met. Calling this
     * function ends the validation chain.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    when(condition: (input: T) => boolean): ValidationEnd<T>

    /**
     * Apply the validation unless the given condition is met. Calling this
     * function ends the validation chain.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    unless(condition: (input: T) => boolean): ValidationEnd<T>

    /**
     * Adds an error code to the validation. Calling this function ends the
     * validation chain.
     *
     * @param code Error code to add to the validation.
     */
    withCode(code: string): ValidationEnd<T>
    withCode(code: number): ValidationEnd<T>

    /**
     * Adds an error message to the validation. Calling this function ends the
     * validation chain.
     *
     * @param message Error message to add to the validation.
     */
    withMessage(message: string): ValidationEnd<T>
}
