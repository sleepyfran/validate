import Step from '../types/step'
import StringValidator from '../types/expressions/string-validator'
import createSyntax from '../syntax'

const createStringValidator = (
    input: string,
    steps: Step[],
): StringValidator => ({
    alphanumeric() {
        return createSyntax(createStringValidator, input, steps)
    },

    notEmpty() {
        return createSyntax(createStringValidator, input, steps)
    },

    minLength(min: number) {
        return createSyntax(createStringValidator, input, steps)
    },

    maxLength(max: number) {
        return createSyntax(createStringValidator, input, steps)
    },

    lengthBetween(min: number, max: number) {
        return createSyntax(createStringValidator, input, steps)
    },

    inclusiveLengthBetween(min: number, max: number) {
        return createSyntax(createStringValidator, input, steps)
    },
})

export default createStringValidator
