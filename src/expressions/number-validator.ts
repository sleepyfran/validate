import Step from '../types/step'
import NumberValidator from '../types/expressions/number-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'

const createNumberValidator = <T>(
    input: T,
    property: number,
    steps: Step[],
): NumberValidator<T> => ({
    zero() {
        const fulfillsValidation = property === 0

        return createSyntax(
            createNumberValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    positive() {
        const fulfillsValidation = property > 0

        return createSyntax(
            createNumberValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    negative() {
        const fulfillsValidation = property < 0

        return createSyntax(
            createNumberValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    greaterThan(threshold: number) {
        const fulfillsValidation = property > threshold

        return createSyntax(
            createNumberValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    greaterThanOrEqual(threshold: number) {
        const fulfillsValidation = property >= threshold

        return createSyntax(
            createNumberValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    lessThan(threshold: number) {
        const fulfillsValidation = property < threshold

        return createSyntax(
            createNumberValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    lessThanOrEqual(threshold: number) {
        const fulfillsValidation = property <= threshold

        return createSyntax(
            createNumberValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },
})

export default createNumberValidator
