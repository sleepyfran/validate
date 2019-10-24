import ValidationStep from '../../types/step'
import ValidationInfo from '../../types/validations/info'
import ValidationEnd from '../../types/validations/chain-end'
import { createValidationEnd } from './state'

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
