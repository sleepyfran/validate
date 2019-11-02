import Step from './types/step'
import ValidatorSyntax from './types/syntax'
import createConditions from './expressions/conditions'
import createChainEnd from './expressions/chain-end'
import createOperators from './expressions/operators'

const createSyntax = <V, T, P>(
    createValidator: (
        input: T,
        propertyName: string,
        value: P,
        steps: Step[],
    ) => V,
    input: T,
    propertyName: string,
    value: P,
    steps: Step[],
): ValidatorSyntax<V, T, P> => ({
    ...createValidator(input, propertyName, value, steps),
    ...createOperators(input, propertyName, value, steps),
    ...createConditions(input, propertyName, value, steps),
    ...createChainEnd(input, steps),
})

export default createSyntax
