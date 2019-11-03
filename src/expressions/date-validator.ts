import Step from '../types/step'
import DateValidator from '../types/expressions/date-validator'
import createSyntax from '../syntax'
import { addValidationStep, propertyNameOrDefault } from '../utils'
import { Input } from '../types/input'

const createDateValidator = <T>(
    input: Input<T, Date>,
    steps: Step[],
): DateValidator<T> => ({
    after(date: Date) {
        const fulfillsValidation = input.value > date

        return createSyntax(
            createDateValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be after ${date}`,
            ),
        )
    },

    before(date: Date) {
        const fulfillsValidation = input.value < date

        return createSyntax(
            createDateValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be before ${date}`,
            ),
        )
    },

    between(pastDate: Date, futureDate: Date) {
        const fulfillsValidation =
            pastDate < input.value && input.value < futureDate

        return createSyntax(
            createDateValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be between ${pastDate} and ${futureDate}`,
            ),
        )
    },

    same(date: Date) {
        const fulfillsValidation = input.value.valueOf() == date.valueOf()

        return createSyntax(
            createDateValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be ${date}`,
            ),
        )
    },
})

export default createDateValidator
