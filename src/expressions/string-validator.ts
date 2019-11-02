import Step from '../types/step'
import StringValidator from '../types/expressions/string-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'
import * as validator from 'validator'

const createStringValidator = <T>(
    input: T,
    propertyName: string,
    value: string,
    steps: Step[],
): StringValidator<T> => ({
    alphanumeric() {
        const fulfillsValidation = validator.isAlphanumeric(value)

        return createSyntax(
            createStringValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    notEmpty() {
        const fulfillsValidation = value.length > 0

        return createSyntax(
            createStringValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    minLength(min: number) {
        const fulfillsValidation = value.length > min

        return createSyntax(
            createStringValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = value.length < max

        return createSyntax(
            createStringValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation = min < value.length && value.length < max

        return createSyntax(
            createStringValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation = min <= value.length && value.length <= max

        return createSyntax(
            createStringValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },
})

export default createStringValidator
