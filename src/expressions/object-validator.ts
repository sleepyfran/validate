import Step from '../types/step'
import createValidation from '../validation'
import ObjectValidator from '../types/expressions/object-validator'
import { Input } from '../types/input'

const createObjectValidator = <T>(
    input: Input<T, T>,
    steps: Step[],
): ObjectValidator<T> => ({
    property<K extends keyof T>(property: K) {
        return createValidation(steps).of<T, T[K], K>(input.input, property)
    },
})

export default createObjectValidator
