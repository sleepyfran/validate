import ValidatorSyntax from '../syntax'
import Validator from './validator'

/**
 * Defines the set of operators that can be used to combine different
 * validation inputs.
 */
export default interface Operators {
    /**
     * Changes the current input being validated, similar to an `Of` but with
     * a better name to chain as an operation.
     *
     * @param input Input to validate.
     */
    and<T>(input: T): Validator<T>

    /**
     * Changes the current input being validated with a property of a given
     * input. Works similar to `and` but automatically uses the property instead
     * of the whole object.
     *
     * @param input Input to validate.
     * @param property Property of the input object to validate.
     */
    and<T, K extends keyof T>(input: T, property: K): Validator<T[K]>

    /**
     * Combines the current validation with another.
     *
     * @param validator Validator to apply to the current one.
     */
    andApply<T>(validator: ValidatorSyntax<T>): ValidatorSyntax<T>
}
