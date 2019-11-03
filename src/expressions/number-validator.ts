import Step from '../types/step'
import NumberValidator from '../types/expressions/number-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'
import { Input } from '../types/input'

const createNumberValidator = <T>(
    input: Input<T, number>,
    steps: Step[],
): NumberValidator<T> => ({
    zero() {
        const fulfillsValidation = input.value === 0

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    positive() {
        const fulfillsValidation = input.value > 0

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    negative() {
        const fulfillsValidation = input.value < 0

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    equals(number) {
        const fulfillsValidation = input.value === number

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    greaterThan(threshold) {
        const fulfillsValidation = input.value > threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    greaterThanOrEqual(threshold) {
        const fulfillsValidation = input.value >= threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    lessThan(threshold) {
        const fulfillsValidation = input.value < threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    lessThanOrEqual(threshold) {
        const fulfillsValidation = input.value <= threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },
})

export default createNumberValidator
