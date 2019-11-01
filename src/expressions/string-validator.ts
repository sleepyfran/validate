import Step from '../types/step'
import StringValidator from '../types/expressions/string-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'
import * as validator from 'validator'

const createStringValidator = <T>(
    input: T,
    property: string,
    steps: Step[],
): StringValidator<T> => ({
    alphanumeric() {
        const fulfillsValidation = validator.isAlphanumeric(property)

        return createSyntax(
            createStringValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    notEmpty() {
        const fulfillsValidation = property.length > 0

        return createSyntax(
            createStringValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    minLength(min: number) {
        const fulfillsValidation = property.length > min

        return createSyntax(
            createStringValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = property.length < max

        return createSyntax(
            createStringValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min < property.length && property.length < max

        return createSyntax(
            createStringValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min <= property.length && property.length <= max

        return createSyntax(
            createStringValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },
})

export default createStringValidator
