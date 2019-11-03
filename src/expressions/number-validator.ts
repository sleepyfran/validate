import Step from '../types/step'
import NumberValidator from '../types/expressions/number-validator'
import createSyntax from '../syntax'
import { addValidationStep, propertyNameOrDefault } from '../utils'
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
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be zero`,
            ),
        )
    },

    positive() {
        const fulfillsValidation = input.value > 0

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be positive`,
            ),
        )
    },

    negative() {
        const fulfillsValidation = input.value < 0

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be negative`,
            ),
        )
    },

    equals(number) {
        const fulfillsValidation = input.value === number

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be equal to ${number}`,
            ),
        )
    },

    greaterThan(threshold) {
        const fulfillsValidation = input.value > threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be greater than ${threshold}`,
            ),
        )
    },

    greaterThanOrEqual(threshold) {
        const fulfillsValidation = input.value >= threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be greater than or equal to ${threshold}`,
            ),
        )
    },

    lessThan(threshold) {
        const fulfillsValidation = input.value < threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be less than ${threshold}`,
            ),
        )
    },

    lessThanOrEqual(threshold) {
        const fulfillsValidation = input.value <= threshold

        return createSyntax(
            createNumberValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be less than or equal to ${threshold}`,
            ),
        )
    },
})

export default createNumberValidator
