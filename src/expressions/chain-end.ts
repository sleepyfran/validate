import Step from '../types/step'
import ChainEnd from '../types/expressions/chain-end'
import { Result } from '../types/result'
import { parse } from '../parser'
import { Input } from '../types/input'

const createChainEnd = <T>(
    input: Input<T, unknown>,
    steps: Step[],
): ChainEnd<T> => ({
    result(): Result<T> {
        return parse(input.input, steps)
    },
})

export default createChainEnd
