import Operators from './expressions/operators'
import Conditions from './expressions/conditions'
import ChainEnd from './expressions/chain-end'
import Info from './expressions/info'
import CommonValidator from './expressions/common-validator'

/**
 * Defines the return of a validator operations, which combines the validator
 * itself (V) and a set of operators, conditions and other utilities that
 * can be invoked after a validation.
 */
type ValidatorSyntax<V, T, P> = V &
    CommonValidator<V, T, P> &
    Operators<T, P> &
    Conditions<T, P> &
    Info<T, P> &
    ChainEnd<T>

export default ValidatorSyntax
