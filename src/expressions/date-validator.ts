import Step from '../types/step'
import DateValidator from '../types/expressions/date-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'

const createDateValidator = <T>(
    input: T,
    property: Date,
    steps: Step[],
): DateValidator<T> => ({
    after(date: Date) {
        const fulfillsValidation = property > date

        return createSyntax(
            createDateValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    before(date: Date) {
        const fulfillsValidation = property < date

        return createSyntax(
            createDateValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    between(pastDate: Date, futureDate: Date) {
        const fulfillsValidation = pastDate < property && property < futureDate

        return createSyntax(
            createDateValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    same(date: Date) {
        const fulfillsValidation = property.valueOf() == date.valueOf()

        return createSyntax(
            createDateValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },
})

export default createDateValidator
