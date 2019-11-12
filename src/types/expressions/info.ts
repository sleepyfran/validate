import Validator from './validator'
import ValidatorSyntax from '../syntax'

export default interface Info<T, P> {
    /**
     * Changes property name of the last validation to a custom one. Useful
     * if the last validation doesn't have a property name because the input
     * is a simple type (like a string or a number) or if it was a `fulfills`
     * validation.
     *
     * @param propertyName Property name to set.
     */
    withPropertyName(
        propertyName: string,
    ): ValidatorSyntax<Validator<T, P>, T, P>

    /**
     * Adds an error code to the validation.
     *
     * @param code Error code to add to the validation.
     */
    withCode(code: string | number): ValidatorSyntax<Validator<T, P>, T, P>

    /**
     * Updates the default error message with the one provided.
     *
     * @param message Error message to add to the validation.
     */
    withMessage(message: string): ValidatorSyntax<Validator<T, P>, T, P>
}
