import ValidationOf from './validation-of'

/**
 * A set of applicable validations for strings.
 */
export default interface ValidationOfStrings<T> {
    /**
     * Checks whether a string property of an object is alphanumeric.
     *
     * @param getter Accessor to the property.
     */
    alphanumeric<S extends string>(getter: (input: T) => S): ValidationOf<T>
}
