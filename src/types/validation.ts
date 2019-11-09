import Validator from './expressions/validator'
import CommonValidator from './expressions/common-validator'

/**
 * Combines an specific validator with a common validator that applies to
 * all types.
 */
export type ValidatorChain<T, P> = Validator<T, P> &
    CommonValidator<Validator<T, P>, T, P>

/**
 * Entry point of the validator.
 */
export default interface Validation {
    /**
     * Returns an specific instance of a `Validator` that are applicable to the
     * provided `T` type. You can either provide a simple type like a `number`
     * or a `string` or a complex object.
     */
    of<T, P, K extends keyof T>(
        input: T | P,
        propertyName?: K,
    ): ValidatorChain<T, P>
}
