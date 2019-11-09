import { ValidatorChain } from '../validation'

/**
 * Defines the set of operators that can be used to combine different
 * validation inputs.
 */
export default interface Operators<T, P> {
    /**
     * Changes the current input being validated, similar to an `Of` but with
     * a better name to chain as an operation.
     *
     * @param input Input to validate.
     */
    and<U>(input: U): ValidatorChain<U, U>

    /**
     * Changes the current input being validated with a property of a given
     * input. Works similar to `and` but automatically uses the property instead
     * of the whole object.
     *
     * @param property Property of the input object to validate.
     */
    andProperty<K extends keyof T>(property: K): ValidatorChain<T, T[K]>
}
