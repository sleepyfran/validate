import Step from './types/step'
import ValidatorSyntax from './types/syntax'
import createConditions from './expressions/conditions'
import createChainEnd from './expressions/chain-end'
import createOperators from './expressions/operators'

const createSyntax = <V, T>(
    createValidator: (input: T, steps: Step[]) => V,
    input: T,
    steps: Step[],
): ValidatorSyntax<V, T> => ({
    ...createValidator(input, steps),
    ...createOperators(input, steps),
    ...createConditions(input, steps),
    ...createChainEnd(input, steps),
})

export default createSyntax
