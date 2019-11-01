import ValidatorSyntax from '../syntax'

/**
 * Set of validations that are applicable to collections.
 */
export default interface CollectionValidator<T> {
    /**
     * Checks whether the input is empty or not.
     */
    notEmpty(): ValidatorSyntax<CollectionValidator<T>, T, any[]>

    /**
     * Checks that the length of the collections is at least the given minimum.
     *
     * @param min Minimum length of the collection.
     */
    minLength(min: number): ValidatorSyntax<CollectionValidator<T>, T, any[]>

    /**
     * Checks that the length of the collection is at not more than the given
     * maximum.
     *
     * @param max Maximum length of the collection.
     */
    maxLength(max: number): ValidatorSyntax<CollectionValidator<T>, T, any[]>

    /**
     * Checks that the length of the collection is between the given numbers, not
     * including the min or the max.
     *
     * @param min Minimum length of the collection.
     * @param max Maximum length of the collection.
     */
    lengthBetween(
        min: number,
        max: number,
    ): ValidatorSyntax<CollectionValidator<T>, T, any[]>

    /**
     * Checks that the length of the collection is between the given numbers,
     * including the min and the max.
     *
     * @param min Minimum length of the collection.
     * @param max Maximum length of the collection.
     */
    inclusiveLengthBetween(
        min: number,
        max: number,
    ): ValidatorSyntax<CollectionValidator<T>, T, any[]>
}
