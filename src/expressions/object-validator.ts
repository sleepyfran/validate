import Step from '../types/step'
import createValidation from '../validation'
import ObjectValidator from '../types/expressions/object-validator'

const createObjectValidator = <T>(
    input: T,
    steps: Step[],
): ObjectValidator<T> => ({
    property(property) {
        return createValidation(steps).of(input[property])
    },
})

export default createObjectValidator
