import ValidationEnd from './validation-end'

export default interface ValidationConditions<T> {
    /**
     * Apply the validation only if the given condition is met. Calling this
     * function ends the current validation chain.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    when(condition: (input: T) => boolean): ValidationEnd<T>

    /**
     * Apply the validation unless the given condition is met. Calling this
     * function ends the current validation chain.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    unless(condition: (input: T) => boolean): ValidationEnd<T>
}
