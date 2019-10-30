import Step from '../types/step'
import Conditions from '../types/expressions/conditions'
import createChainEnd from './chain-end'
import createOperators from './operators'

const createConditions = <T>(input: T, steps: Step[]): Conditions<T> => ({
    when(condition) {
        return {
            ...createChainEnd(input, steps),
            ...createOperators(input, steps),
        }
    },

    unless(condition) {
        return {
            ...createChainEnd(input, steps),
            ...createOperators(input, steps),
        }
    },
})

export default createConditions
