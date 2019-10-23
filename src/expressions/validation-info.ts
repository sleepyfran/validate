import ValidationStep from '../types/validation-step'
import ValidationInfo from '../types/validation-info'
import ValidationEnd from '../types/validation-end'
import { createValidationEnd } from './validation-state'

export default <T>(
    input: T,
    previousSteps: ValidationStep[],
): ValidationInfo<T> => ({
    withCode(code: string | number): ValidationEnd<T> {
        return createValidationEnd(input, previousSteps, {
            expression: {
                kind: 'info',
                code,
            },
        })
    },

    withMessage(message: string): ValidationEnd<T> {
        return createValidationEnd(input, previousSteps, {
            expression: {
                kind: 'info',
                message,
            },
        })
    },
})
