import Step from '../types/step'
import CollectionValidator from '../types/expressions/collections-validator'
import createSyntax from '../syntax'
import { addValidationStep } from '../utils'

const createCollectionsValidator = <T>(
    input: T,
    propertyName: string,
    value: any[],
    steps: Step[],
): CollectionValidator<T> => ({
    notEmpty() {
        const fulfillsValidation = value.length > 0

        return createSyntax(
            createCollectionsValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    minLength(min: number) {
        const fulfillsValidation = value.length > min

        return createSyntax(
            createCollectionsValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    maxLength(max: number) {
        const fulfillsValidation = value.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    lengthBetween(min: number, max: number) {
        const fulfillsValidation = min < value.length && value.length < max

        return createSyntax(
            createCollectionsValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },

    inclusiveLengthBetween(min: number, max: number) {
        const fulfillsValidation = min <= value.length && value.length <= max

        return createSyntax(
            createCollectionsValidator,
            input,
            propertyName,
            value,
            addValidationStep(steps, propertyName, fulfillsValidation),
        )
    },
})

export default createCollectionsValidator
