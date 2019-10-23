import ValidationOf from '../types/validation-of'
import ValidationStep from '../types/validation-step'
import validationOfStrings from './validation-of-strings'
import validationOfCollections from './validation-of-collections'
import validationOfDates from './validation-of-dates'
import validationInfo from './validation-info'
import validationConditions from './validation-conditions'
import result from './result'
import { Result } from '../types/result'

export default <T>(
    input: T,
    validationSteps: ValidationStep[],
): ValidationOf<T> => ({
    ...validationOfStrings(input, validationSteps),
    ...validationOfCollections(input, validationSteps),
    ...validationOfDates(input, validationSteps),
    ...validationInfo(input, validationSteps),
    ...validationConditions(input, validationSteps),

    result(): Result<T> {
        return result(input, validationSteps)
    },
})
