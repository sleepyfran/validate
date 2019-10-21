import ValidationEnd from './validation-end'

export default interface ValidationInfo<T> {
    /**
     * Adds an error code to the validation. Calling this function ends the
     * current validation chain.
     *
     * @param code Error code to add to the validation.
     */
    withCode(code: string): ValidationEnd<T>
    withCode(code: number): ValidationEnd<T>

    /**
     * Adds an error message to the validation. Calling this function ends the
     * current validation chain.
     *
     * @param message Error message to add to the validation.
     */
    withMessage(message: string): ValidationEnd<T>
}
