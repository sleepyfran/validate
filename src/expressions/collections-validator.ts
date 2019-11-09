import Step from '../types/step'
import CollectionValidator from '../types/expressions/collections-validator'
import createSyntax from '../syntax'
import {
    addValidationStep,
    isNotDefined,
    propertyNameOrDefault,
    validateIfDefined,
} from '../utils'
import { Input } from '../types/input'

const valueOrDefault = (input: Input<any, any[]>) =>
    isNotDefined(input.value) ? undefined : input.value.length

const createCollectionsValidator = <T>(
    input: Input<T, any[]>,
    steps: Step[],
): CollectionValidator<T> => ({
    empty() {
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.length === 1,
        )

        return createSyntax(
            createCollectionsValidator,
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
            createCollectionsValidator,
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
        const value = valueOrDefault(input)
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.length > min,
        )

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length of at least ${min} characters. You entered ${value}`,
            ),
        )
    },

    maxLength(max: number) {
        const value = valueOrDefault(input)
        const fulfillsValidation = validateIfDefined(
            input,
            input => input.value.length < max,
        )

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length of at most ${max} characters. You entered ${value}`,
            ),
        )
    },

    lengthBetween(min: number, max: number) {
        const value = valueOrDefault(input)
        const fulfillsValidation = validateIfDefined(
            input,
            input => min < input.value.length && input.value.length < max,
        )

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length of at least ${min} and at most ${max}. You entered ${value}`,
            ),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const value = valueOrDefault(input)
        const fulfillsValidation = validateIfDefined(
            input,
            input => min <= input.value.length && input.value.length <= max,
        )

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length between ${min} and ${max}. You entered ${value}`,
            ),
        )
    },
})

export default createCollectionsValidator
