import ValidatorSyntax from '../syntax'

/**
 * Set of validations that are applicable to strings.
 */
export default interface StringValidator<T> {
    /**
     * Checks if the input contains only letters and digits.
     */
    alphanumeric(): ValidatorSyntax<StringValidator<T>, T, string>

    /**
     * Checks if the input contains an specific string.
     */
    contains(value: string): ValidatorSyntax<StringValidator<T>, T, string>

    /**
     * Checks that the input is empty.
     */
    empty(): ValidatorSyntax<StringValidator<T>, T, string>

    /**
     * Checks that the input is not empty.
     */
    notEmpty(): ValidatorSyntax<StringValidator<T>, T, string>

    /**
     * Checks that the length of the string is at least the given minimum.
     *
     * @param min Minimum length of the string.
     */
    minLength(min: number): ValidatorSyntax<StringValidator<T>, T, string>

    /**
     * Checks that the length of the string is at not more than the given
     * maximum.
     *
     * @param max Maximum length of the string.
     */
    maxLength(max: number): ValidatorSyntax<StringValidator<T>, T, string>

    /**
     * Checks that the length of the string is between the given numbers, not
     * including the min or the max.
     *
     * @param min Minimum length of the string.
     * @param max Maximum length of the string.
     */
    lengthBetween(
        min: number,
        max: number,
    ): ValidatorSyntax<StringValidator<T>, T, string>

    /**
     * Checks that the length of the string is between the given numbers,
     * including the min and the max.
     *
     * @param min Minimum length of the string.
     * @param max Maximum length of the string.
     */
    inclusiveLengthBetween(
        min: number,
        max: number,
    ): ValidatorSyntax<StringValidator<T>, T, string>
}
