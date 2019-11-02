import Step from '../types/step'
import DateValidator from '../types/expressions/date-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'

const createDateValidator = <T>(
    input: T,
    propertyName: string,
    value: Date,
    steps: Step[],
): DateValidator<T> => ({
    after(date: Date) {
        const fulfillsValidation = value > date

        return createSyntax(
            createDateValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    before(date: Date) {
        const fulfillsValidation = value < date

        return createSyntax(
            createDateValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    between(pastDate: Date, futureDate: Date) {
        const fulfillsValidation = pastDate < value && value < futureDate

        return createSyntax(
            createDateValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    same(date: Date) {
        const fulfillsValidation = value.valueOf() == date.valueOf()

        return createSyntax(
            createDateValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },
})

export default createDateValidator
