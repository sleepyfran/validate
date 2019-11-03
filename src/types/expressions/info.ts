import Validator from './validator'
import ValidatorSyntax from '../syntax'

export default interface Info<T, P> {
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
