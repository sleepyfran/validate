import { isCollection, isDate, isNumber, isString } from './utils'
import createStringValidator from './expressions/string-validator'
import createObjectValidator from './expressions/object-validator'
import createNumberValidator from './expressions/number-validator'
import createCollectionsValidator from './expressions/collections-validator'
import createDateValidator from './expressions/date-validator'
import Step from './types/step'
import Validation from './types/validation'
import Validator from './types/expressions/validator'

/**
 * Entry point of the validator.
 */
const createValidation = (steps: Step[]): Validation => ({
    /**
     * Returns an specific instance of a `Validator` that are applicable to the
     * provided `T` type. You can either provide a simple type like a `number`
     * or a `string` or a complex object.
     */
    of<T>(input: T): Validator<T> {
        if (isString(input)) {
            return createStringValidator(input, steps) as any
        } else if (isNumber(input)) {
            return createNumberValidator(input, steps) as any
        } else if (isCollection(input)) {
            return createCollectionsValidator(input, steps) as any
        } else if (isDate(input)) {
            return createDateValidator(input, steps) as any
        }

        return createObjectValidator(input, steps) as any
    },
})

export default createValidation
