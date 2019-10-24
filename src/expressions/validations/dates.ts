import ValidationOf from '../../types/validations/of'
import ValidationStep from '../../types/step'
import ValidationOfDates from '../../types/validations/dates'
import { createValidationOf } from './state'

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
