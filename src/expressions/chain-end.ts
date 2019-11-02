import Step from '../types/step'
import ChainEnd from '../types/expressions/chain-end'
import { Result } from '../types/result'
import { parse } from '../parser'

const createChainEnd = <T>(input: T, steps: Step[]): ChainEnd<T> => ({
    result(): Result<T> {
        return parse(input, steps)
    },
})

export default createChainEnd
