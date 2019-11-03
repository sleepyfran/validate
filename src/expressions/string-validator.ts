import Step from '../types/step'
import StringValidator from '../types/expressions/string-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'
import * as validator from 'validator'
import { Input } from '../types/input'

const createStringValidator = <T>(
    input: Input<T, string>,
    steps: Step[],
): StringValidator<T> => ({
    alphanumeric() {
        const fulfillsValidation = validator.isAlphanumeric(input.value)

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    notEmpty() {
        const fulfillsValidation = input.value.length > 0

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    minLength(min: number) {
        const fulfillsValidation = input.value.length > min

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = input.value.length < max

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min < input.value.length && input.value.length < max

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min <= input.value.length && input.value.length <= max

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },
})

export default createStringValidator
