import ValidationOf from '../types/validation-of'
import ValidationStep from '../types/validation-step'
import ValidationOfDates from '../types/validation-of-dates'
import { createValidationOf } from './validation-state'

export default <T>(
    input: T,
    previousSteps: ValidationStep[],
): ValidationOfDates<T> => ({
    after<D extends Date>(
        getter: (input: T) => D,
        date: Date,
    ): ValidationOf<T> {
        const givenDate = getter(input)
        const fulfillsValidation = givenDate > date

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    before<D extends Date>(
        getter: (input: T) => D,
        date: Date,
    ): ValidationOf<T> {
        const givenDate = getter(input)
        const fulfillsValidation = givenDate < date

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    between<D extends Date>(
        getter: (input: T) => D,
        pastDate: Date,
        futureDate: Date,
    ): ValidationOf<T> {
        const givenDate = getter(input)
        const fulfillsValidation =
            pastDate < givenDate && givenDate < futureDate

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    same<D extends Date>(getter: (input: T) => D, date: Date): ValidationOf<T> {
        const givenDate = getter(input)
        const fulfillsValidation = givenDate.valueOf() === date.valueOf()

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },
})
