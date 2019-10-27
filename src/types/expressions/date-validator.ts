import ValidatorSyntax from '../syntax'

/**
 * Set of validations that are applicable to dates.
 */
export default interface DateValidator {
    /**
     * Checks whether a date is after the given date.
     *
     * @param date Date to check against.
     */
    after(date: Date): ValidatorSyntax<DateValidator>

    /**
     * Checks whether a date is before the given date.
     *
     * @param date Date to check against.
     */
    before(date: Date): ValidatorSyntax<DateValidator>

    /**
     * Checks whether a date is between the given dates, including them.
     *
     * @param pastDate Past date to check against.
     * @param futureDate Future date to check against.
     */
    between(pastDate: Date, futureDate: Date): ValidatorSyntax<DateValidator>

    /**
     * Checks whether a date is the same as the given date.
     *
     * @param date Date to check against.
     */
    same(date: Date): ValidatorSyntax<DateValidator>
}
