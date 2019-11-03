import Step from '../types/step'
import CollectionValidator from '../types/expressions/collections-validator'
import createSyntax from '../syntax'
import { addValidationStep, propertyNameOrDefault } from '../utils'
import { Input } from '../types/input'

const createCollectionsValidator = <T>(
    input: Input<T, any[]>,
    steps: Step[],
): CollectionValidator<T> => ({
    notEmpty() {
        const fulfillsValidation = input.value.length > 0

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
        const fulfillsValidation = input.value.length > min

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length of at least ${min} characters. You entered ${
                    input.value.length
                }`,
            ),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = input.value.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length of at most ${max} characters. You entered ${
                    input.value.length
                }`,
            ),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min < input.value.length && input.value.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length of at least ${min} and at most ${max}. You entered ${
                    input.value.length
                }`,
            ),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min <= input.value.length && input.value.length <= max

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} needs to have a length between ${min} and ${max}. You entered ${
                    input.value.length
                }`,
            ),
        )
    },
})

export default createCollectionsValidator
