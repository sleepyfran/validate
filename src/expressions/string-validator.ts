import Step from '../types/step'
import StringValidator from '../types/expressions/string-validator'
import createSyntax from '../syntax'
import {
    addValidationStep,
    propertyNameOrDefault,
    validateIfDefined,
} from '../utils'
import * as validator from 'validator'
import { Input } from '../types/input'

const createStringValidator = <T>(
    input: Input<T, string>,
    steps: Step[],
): StringValidator<T> => ({
    alphanumeric() {
        const fulfillsValidation = validateIfDefined(input, input =>
            validator.isAlphanumeric(input.value),
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must contain only alphanumeric characters`,
            ),
        )
    },

    contains(value) {
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.indexOf(value) > -1,
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must contain the value '${value}'`,
            ),
        )
    },

    empty() {
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.length === 0,
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be empty`,
            ),
        )
    },

    notEmpty() {
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.length > 0,
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must not be empty`,
            ),
        )
    },

    minLength(min: number) {
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.length > min,
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must have at least ${min} characters`,
            ),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.length < max,
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must have at most ${max} characters`,
            ),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation = validateIfDefined(
            input,
            input => min < input.value.length && input.value.length < max,
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must have at least ${min} and at most ${max} characters`,
            ),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation = validateIfDefined(
            input,
            input => min <= input.value.length && input.value.length <= max,
        )

        return createSyntax(
            createStringValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must have between ${min} and ${max} characters`,
            ),
        )
    },
})

export default createStringValidator
