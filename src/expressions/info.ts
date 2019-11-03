import Step from '../types/step'
import Info from '../types/expressions/info'
import createChainEnd from './chain-end'
import createOperators from './operators'
import { addStep } from '../utils'
import createConditions from './conditions'
import { Input } from '../types/input'

const createInfo = <T, P>(input: Input<T, P>, steps: Step[]): Info<T, P> => ({
    withCode(code) {
        const updatedSteps = addStep(steps, {
            kind: 'info',
            code,
        })

        return {
            ...createChainEnd(input, updatedSteps),
            ...createOperators(input, updatedSteps),
            ...createConditions(input, updatedSteps),
        }
    },

    withMessage(message) {
        const updatedSteps = addStep(steps, {
            kind: 'info',
            message,
        })

        return {
            ...createChainEnd(input, updatedSteps),
            ...createOperators(input, updatedSteps),
            ...createConditions(input, updatedSteps),
        }
    },
})

export default createInfo
