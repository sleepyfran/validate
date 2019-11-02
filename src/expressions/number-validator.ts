import Step from '../types/step'
import NumberValidator from '../types/expressions/number-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'

const createNumberValidator = <T>(
    input: T,
    propertyName: string,
    value: number,
    steps: Step[],
): NumberValidator<T> => ({
    zero() {
        const fulfillsValidation = value === 0

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    positive() {
        const fulfillsValidation = value > 0

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    negative() {
        const fulfillsValidation = value < 0

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    equals(number) {
        const fulfillsValidation = value === number

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    greaterThan(threshold) {
        const fulfillsValidation = value > threshold

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    greaterThanOrEqual(threshold) {
        const fulfillsValidation = value >= threshold

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    lessThan(threshold) {
        const fulfillsValidation = value < threshold

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    lessThanOrEqual(threshold) {
        const fulfillsValidation = value <= threshold

        return createSyntax(
            createNumberValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },
})

export default createNumberValidator
