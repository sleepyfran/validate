import Step from '../types/step'
import Operators from '../types/expressions/operators'
import createValidation from '../validation'

const createOperators = <T, P>(
    previousInput: T,
    propertyName: string,
    value: P,
    steps: Step[],
): Operators<T, P> => ({
    and<U, K extends keyof U>(input: U) {
        return createValidation(steps).of<U, P, K>(input)
    },

    andProperty<K extends keyof T>(property: K) {
        return createValidation(steps).of<T, T[K], K>(previousInput, property)
    },
})

export default createOperators
