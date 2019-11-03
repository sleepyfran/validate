import Step from '../types/step'
import Operators from '../types/expressions/operators'
import createValidation from '../validation'
import { Input } from '../types/input'

const createOperators = <T, P>(
    input: Input<T, P>,
    steps: Step[],
): Operators<T, P> => ({
    and<U, K extends keyof U>(input: U) {
        return createValidation(steps).of<U, P, K>(input)
    },

    andProperty<K extends keyof T>(property: K) {
        return createValidation(steps).of<T, T[K], K>(input.input, property)
    },
})

export default createOperators
