import ValidationOfNumbers from '../../types/validations/numbers'
import ValidationOf from '../../types/validations/of'
import ValidationStep from '../../types/step'
import { createValidationOf } from './state'

export default <T>(
    input: T,
    previousSteps: ValidationStep[],
): ValidationOfNumbers<T> => ({
    zero(getter): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = property === 0

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    positive(getter): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = property > 0

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    negative(getter): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = property < 0

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    greaterThan(getter, threshold): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = property > threshold

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    greaterThanOrEqual(getter, threshold): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = property >= threshold

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    lessThan(getter, threshold): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = property < threshold

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    lessThanOrEqual(getter, threshold): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = property <= threshold

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },
})
