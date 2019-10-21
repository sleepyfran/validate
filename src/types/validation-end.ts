import ValidationInfo from './validation-info'
import ValidationOperators from './validation-operators'
import { Result } from './result'

/**
 * Defines the end of a validation chain. Allows to retrieve the result of
 * the validation or chain more with additional operators.
 */
export default interface ValidationEnd<T> extends ValidationInfo<T> {
    /**
     * Adds a new validation to the chain.
     */
    and(): ValidationOperators<T>

    /**
     * Returns the result of the validation.
     */
    result(): Result<T>
}
