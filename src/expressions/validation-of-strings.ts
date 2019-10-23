import ValidationOfStrings from '../types/validation-of-strings'
import ValidationOf from '../types/validation-of'
import ValidationStep from '../types/validation-step'
import * as validator from 'validator'
import { createValidationOf } from './validation-state'

export default <T>(
    input: T,
    previousSteps: ValidationStep[],
): ValidationOfStrings<T> => ({
    alphanumeric<S extends string>(getter: (input: T) => S): ValidationOf<T> {
        const property = getter(input)
        const fulfillsValidation = validator.isAlphanumeric(property)

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },
})
