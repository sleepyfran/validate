import Validator from './validator'

/**
 * Set of validations that are applicable to objects.
 */
export default interface ObjectValidator<T> {
    /**
     * Creates a new validation pipeline for the given property of the input.
     *
     * @param property Property of the input to validate.
     */
    property<K extends keyof T>(property: K): Validator<T, T[K]>
}
