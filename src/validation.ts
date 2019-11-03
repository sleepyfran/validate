import { isCollection, isDate, isNumber, isString } from './utils'
import createStringValidator from './expressions/string-validator'
import createObjectValidator from './expressions/object-validator'
import createNumberValidator from './expressions/number-validator'
import createCollectionsValidator from './expressions/collections-validator'
import createDateValidator from './expressions/date-validator'
import Step from './types/step'
import Validation from './types/validation'

/**
 * Entry point of the validator.
 */
const createValidation = (steps: Step[]): Validation => ({
    /**
     * Returns an specific instance of a `Validator` that are applicable to the
     * provided `T` type. You can either provide a simple type like a `number`
     * or a `string` or a complex object.
     */
    of(input, propertyName) {
        const property = propertyName ? propertyName.toString() : ''
        const value = propertyName ? (input as any)[propertyName] : input

        const validatorInput = {
            input,
            propertyName: property,
            value,
        }

        if (isString(value)) {
            return createStringValidator(validatorInput, steps) as any
        } else if (isNumber(value)) {
            return createNumberValidator(validatorInput, steps) as any
        } else if (isCollection(value)) {
            return createCollectionsValidator(validatorInput, steps) as any
        } else if (isDate(value)) {
            return createDateValidator(validatorInput, steps) as any
        }

        return createObjectValidator(input, steps) as any
    },
})

export default createValidation
