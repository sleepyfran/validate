import Step from '../types/step'
import CollectionValidator from '../types/expressions/collections-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'
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
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    minLength(min: number) {
        const fulfillsValidation = input.value.length > min

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = input.value.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min < input.value.length && input.value.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min <= input.value.length && input.value.length <= max

        return createSyntax(
            createCollectionsValidator,
            input,
            addValidationStep(steps, input.propertyName, fulfillsValidation),
        )
    },
})

export default createCollectionsValidator
