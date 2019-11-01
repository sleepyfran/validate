import Step from '../types/step'
import createValidation from '../validation'
import ObjectValidator from '../types/expressions/object-validator'

const createObjectValidator = <T>(
    input: T,
    steps: Step[],
): ObjectValidator<T> => ({
    property<K extends keyof T>(property: K) {
        return createValidation(steps).of<T, T[K]>(input[property])
    },
})

export default createObjectValidator
