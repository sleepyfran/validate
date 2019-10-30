import Step from '../types/step'
import NumberValidator from '../types/expressions/number-validator'
import createSyntax from '../syntax'

const createNumberValidator = (
    input: number,
    steps: Step[],
): NumberValidator => ({
    zero() {
        return createSyntax(createNumberValidator, input, steps)
    },

    positive() {
        return createSyntax(createNumberValidator, input, steps)
    },

    negative() {
        return createSyntax(createNumberValidator, input, steps)
    },

    greaterThan(threshold: number) {
        return createSyntax(createNumberValidator, input, steps)
    },

    greaterThanOrEqual(threshold: number) {
        return createSyntax(createNumberValidator, input, steps)
    },

    lessThan(threshold: number) {
        return createSyntax(createNumberValidator, input, steps)
    },

    lessThanOrEqual(threshold: number) {
        return createSyntax(createNumberValidator, input, steps)
    },
})

export default createNumberValidator
