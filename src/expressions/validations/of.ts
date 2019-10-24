import ValidationOf from '../../types/validations/of'
import ValidationStep from '../../types/step'
import validationOfStrings from './strings'
import validationOfCollections from './collections'
import validationOfDates from './dates'
import validationInfo from './info'
import validationConditions from './conditions'
import result from '../result'
import { Result } from '../../types/result'

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
