import ValidationOf from './validation-of'

/**
 * A set of applicable validations for dates.
 */
export default interface ValidationOfDates<T> {
    /**
     * Checks whether a date is after the given date.
     *
     * @param getter Accessor to the property.
     * @param date Date to check against.
     */
    after<D extends Date>(getter: (input: T) => D, date: Date): ValidationOf<T>

    /**
     * Checks whether a date is before the given date.
     *
     * @param getter Accessor to the property.
     * @param date Date to check against.
     */
    before<D extends Date>(getter: (input: T) => D, date: Date): ValidationOf<T>

    /**
     * Checks whether a date is between the given dates, including them.
     *
     * @param getter Accessor to the property.
     * @param pastDate Past date to check against.
     * @param futureDate Future date to check against.
     */
    between<D extends Date>(
        getter: (input: T) => D,
        pastDate: Date,
        futureDate: Date,
    ): ValidationOf<T>

    /**
     * Checks whether a date is the same as the given date.
     *
     * @param getter Accessor to the property.
     * @param date Date to check against.
     */
    same<D extends Date>(getter: (input: T) => D, date: Date): ValidationOf<T>
}
