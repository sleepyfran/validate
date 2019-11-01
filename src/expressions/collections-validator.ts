import Step from '../types/step'
import CollectionValidator from '../types/expressions/collections-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'

const createCollectionsValidator = <T>(
    input: T,
    property: any[],
    steps: Step[],
): CollectionValidator<T> => ({
    notEmpty() {
        const fulfillsValidation = property.length > 0

        return createSyntax(
            createCollectionsValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    minLength(min: number) {
        const fulfillsValidation = property.length > min

        return createSyntax(
            createCollectionsValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = property.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min < property.length && property.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation =
            min <= property.length && property.length <= max

        return createSyntax(
            createCollectionsValidator,
            input,
            property,
            addValidationStep(steps, fulfillsValidation),
        )
    },
})

export default createCollectionsValidator
