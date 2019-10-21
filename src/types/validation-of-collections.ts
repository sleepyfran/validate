import ValidationOf from './validation-of'
import { IncludesLength, IncludesSize } from './inputs'

export default interface ValidationOfCollections<T> {
    /**
     * Checks whether an iterable (collections, strings, etc.) is empty or not.
     *
     * @param getter Accessor to the property.
     */
    notEmpty<C extends IncludesLength | IncludesSize>(
        getter: (input: T) => C,
    ): ValidationOf<T>

    /**
     * Checks that the length of the iterable is at least the given minimum.
     *
     * @param getter Accessor to the property.
     * @param min Minimum length of the iterable.
     */
    minLength<C extends IncludesLength | IncludesSize>(
        getter: (input: T) => C,
        min: number,
    ): ValidationOf<T>

    /**
     * Checks that the length of the iterable is at not more than the given
     * maximum.
     *
     * @param getter Accessor to the property.
     * @param max Maximum length of the iterable.
     */
    maxLength<C extends IncludesLength | IncludesSize>(
        getter: (input: T) => C,
        max: number,
    ): ValidationOf<T>

    /**
     * Checks that the length of the iterable is between the given numbers.
     *
     * @param getter Accessor to the property.
     * @param min Minimum length of the iterable.
     * @param max Maximum length of the iterable.
     */
    lengthBetween<C extends IncludesLength | IncludesSize>(
        getter: (input: T) => C,
        min: number,
        max: number,
    ): ValidationOf<T>
}
