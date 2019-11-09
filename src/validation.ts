import { isCollection, isDate, isNumber, isString } from './utils'
import createStringValidator from './expressions/string-validator'
import createObjectValidator from './expressions/object-validator'
import createNumberValidator from './expressions/number-validator'
import createCollectionsValidator from './expressions/collections-validator'
import createDateValidator from './expressions/date-validator'
import Step from './types/step'
import Validation from './types/validation'
import createCommonValidator from './expressions/common-validator'

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

        const createValidator = isString(value)
            ? createStringValidator
            : isNumber(value)
            ? createNumberValidator
            : isCollection(value)
            ? createCollectionsValidator
            : isDate(value)
            ? createDateValidator
            : createObjectValidator

        // We need to cast the `createValidator` to any because otherwise TS
        // gives an error that the expression is not callable, even though it is.
        // https://github.com/microsoft/TypeScript/issues/33591
        return {
            ...(createValidator as any)(validatorInput, steps),
            ...createCommonValidator(
                createValidator as any,
                validatorInput,
                steps,
            ),
        } as any
    },
})

export default createValidation
