import ValidatorSyntax from '../syntax'

/**
 * Set of validations that are applicable to numbers.
 */
export default interface NumberValidator {
    /**
     * Checks whether a number is zero or not.
     *
     */
    zero(): ValidatorSyntax<NumberValidator>

    /**
     * Checks whether a number is positive or not.
     *
     */
    positive(): ValidatorSyntax<NumberValidator>

    /**
     * Checks whether a number is negative or not.
     *
     */
    negative(): ValidatorSyntax<NumberValidator>

    /**
     * Checks if the input is greater than a given number.
     *
     * @param threshold Number to check against.
     */
    greaterThan(threshold: number): ValidatorSyntax<NumberValidator>

    /**
     * Checks if the input is greater than or equal to a given number.
     *
     * @param threshold Number to check against.
     */
    greaterThanOrEqual(threshold: number): ValidatorSyntax<NumberValidator>

    /**
     * Checks if the input is less than a given number.
     *
     * @param threshold Number to check against.
     */
    lessThan(threshold: number): ValidatorSyntax<NumberValidator>

    /**
     * Checks if the input is less than or equal to a given number.
     *
     * @param threshold Number to check against.
     */
    lessThanOrEqual(threshold: number): ValidatorSyntax<NumberValidator>
}
