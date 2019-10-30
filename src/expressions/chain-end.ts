import Step from '../types/step'
import ChainEnd from '../types/expressions/chain-end'
import createResult from './result'
import { Result } from '../types/result'

const createChainEnd = <T>(input: T, steps: Step[]): ChainEnd<T> => ({
    result(): Result<T> {
        return createResult(input, [])
    },
})

export default createChainEnd
