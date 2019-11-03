import Step from './types/step'
import ValidatorSyntax from './types/syntax'
import createConditions from './expressions/conditions'
import createChainEnd from './expressions/chain-end'
import createOperators from './expressions/operators'
import { Input } from './types/input'
import createInfo from './expressions/info'

const createSyntax = <V, T, P>(
    createValidator: (input: Input<T, P>, steps: Step[]) => V,
    input: Input<T, P>,
    steps: Step[],
): ValidatorSyntax<V, T, P> => ({
    ...createValidator(input, steps),
    ...createInfo(input, steps),
    ...createOperators(input, steps),
    ...createConditions(input, steps),
    ...createChainEnd(input, steps),
})

export default createSyntax
