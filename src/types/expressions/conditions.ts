import Operators from './operators'
import ChainEnd from './chain-end'

/**
 * Defines a function that will be applied whenever the validator wants to
 * check whether it should apply the validation or not.
 */
type Condition<T> = (input: T) => boolean

/**
 * Set of conditions that can be applied to a validation to indicate under
 * which conditions the validation should be applied.
 */
export default interface Conditions<T, P> {
    /**
     * Apply the validation only if the given condition is met. Calling this
     * function ends the current validation chain.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    when(condition: Condition<T>): ChainEnd<T> & Operators<T, P>

    /**
     * Apply the validation unless the given condition is met. Calling this
     * function ends the current validation chain.
     *
     * @param condition Function to call with the object being validated to
     * check if the validation should be applied or not.
     */
    unless(condition: Condition<T>): ChainEnd<T> & Operators<T, P>
}
