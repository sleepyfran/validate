import Step from './types/step'
import ValidatorSyntax from './types/syntax'
import createConditions from './expressions/conditions'
import createChainEnd from './expressions/chain-end'
import createOperators from './expressions/operators'

const createSyntax = <V, T, P>(
    createValidator: (input: T, property: P, steps: Step[]) => V,
    input: T,
    property: P,
    steps: Step[],
): ValidatorSyntax<V, T, P> => ({
    ...createValidator(input, property, steps),
    ...createOperators(input, property, steps),
    ...createConditions(input, property, steps),
    ...createChainEnd(input, steps),
})

export default createSyntax
