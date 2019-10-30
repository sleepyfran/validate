import Step from '../types/step'
import CollectionValidator from '../types/expressions/collections-validator'
import createSyntax from '../syntax'

const createCollectionsValidator = (
    input: any[],
    steps: Step[],
): CollectionValidator => ({
    notEmpty() {
        return createSyntax(createCollectionsValidator, input, steps)
    },

    minLength(min: number) {
        return createSyntax(createCollectionsValidator, input, steps)
    },

    maxLength(max: number) {
        return createSyntax(createCollectionsValidator, input, steps)
    },

    lengthBetween(min: number, max: number) {
        return createSyntax(createCollectionsValidator, input, steps)
    },

    inclusiveLengthBetween(min: number, max: number) {
        return createSyntax(createCollectionsValidator, input, steps)
    },
})

export default createCollectionsValidator
