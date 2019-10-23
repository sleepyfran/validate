import ValidationStep from '../types/validation-step'
import ValidationConditions from '../types/validation-conditions'
import ValidationEnd from '../types/validation-end'
import validationEnd from './validation-end'

export default <T>(
    input: T,
    validationSteps: ValidationStep[],
): ValidationConditions<T> => ({
    when(condition: (input: T) => boolean): ValidationEnd<T> {
        return validationEnd(input, validationSteps)
    },

    unless(condition: (input: T) => boolean): ValidationEnd<T> {
        return validationEnd(input, validationSteps)
    },
})
