import ValidationEnd from '../../types/validations/chain-end'
import ValidationStep from '../../types/step'
import validationInfo from './info'
import { Result } from '../../types/result'
import result from '../result'
import { createValidationOf } from './state'

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
