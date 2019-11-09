import Step from './types/step'
import ValidatorSyntax from './types/syntax'
import createConditions from './expressions/conditions'
import createChainEnd from './expressions/chain-end'
import createOperators from './expressions/operators'
import createInfo from './expressions/info'
import createCommonValidator from './expressions/common-validator'
import { Input } from './types/input'

const createSyntax = <V, T, P>(
    createValidator: (input: Input<T, P>, steps: Step[]) => V,
    input: Input<T, P>,
    steps: Step[],
): ValidatorSyntax<V, T, P> => ({
    ...createValidator(input, steps),
    ...createCommonValidator(createValidator, input, steps),
    ...createInfo(input, steps),
    ...createOperators(input, steps),
    ...createConditions(input, steps),
    ...createChainEnd(input, steps),
})

export default createSyntax
