import ValidationOfStrings from '../../types/strings'
import ValidationOf from '../../types/validations/of'
import ValidationStep from '../../types/step'
import * as validator from 'validator'
import { createValidationOf } from './state'

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
