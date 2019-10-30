import Step from '../types/step'
import Operators from '../types/expressions/operators'
import createValidation from '../validation'

const createOperators = <T>(previousInput: T, steps: Step[]): Operators<T> => ({
    and(input) {
        return createValidation(steps).of(input)
    },

    andProperty(input, property) {
        return createValidation(steps).of(input[property])
    },
})

export default createOperators
