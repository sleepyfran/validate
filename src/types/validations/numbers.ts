import ValidationOf from './of'

/**
 * A set of applicable validations for numbers.
 */
export default interface Numbers<T> {
    /**
     * Checks whether a number is zero or not.
     *
     * @param getter Accessor to the property.
     */
    zero<N extends number>(getter: (input: T) => N): ValidationOf<T>

    /**
     * Checks whether a number is positive or not.
     *
     * @param getter Accessor to the property.
     */
    positive<N extends number>(getter: (input: T) => N): ValidationOf<T>

    /**
     * Checks whether a number is negative or not.
     *
     * @param getter Accessor to the property.
     */
    negative<N extends number>(getter: (input: T) => N): ValidationOf<T>

    /**
     * Checks if the input is greater than a given number.
     *
     * @param getter Accessor to the property.
     * @param threshold Number to check against.
     */
    greaterThan<N extends number>(
        getter: (input: T) => N,
        threshold: number,
    ): ValidationOf<T>

    /**
     * Checks if the input is greater than or equal to a given number.
     *
     * @param getter Accessor to the property.
     * @param threshold Number to check against.
     */
    greaterThanOrEqual<N extends number>(
        getter: (input: T) => N,
        threshold: number,
    ): ValidationOf<T>

    /**
     * Checks if the input is less than a given number.
     *
     * @param getter Accessor to the property.
     * @param threshold Number to check against.
     */
    lessThan<N extends number>(
        getter: (input: T) => N,
        threshold: number,
    ): ValidationOf<T>

    /**
     * Checks if the input is less than or equal to a given number.
     *
     * @param getter Accessor to the property.
     * @param threshold Number to check against.
     */
    lessThanOrEqual<N extends number>(
        getter: (input: T) => N,
        threshold: number,
    ): ValidationOf<T>
}
