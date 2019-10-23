import ValidationEnd from '../types/validation-end'
import ValidationStep from '../types/validation-step'
import validationInfo from './validation-info'
import { Result } from '../types/result'
import result from './result'
import { createValidationOf } from './validation-state'

export default <T>(
    input: T,
    previousSteps: ValidationStep[],
): ValidationEnd<T> => ({
    ...validationInfo(input, previousSteps),

    and: () => {
        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'operator',
                type: 'and',
            },
        })
    },

    result(): Result<T> {
        return result(input, previousSteps)
    },
})
