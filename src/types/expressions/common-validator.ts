import ValidatorSyntax from '../syntax'

/**
 * Set of validations that are applicable to all types.
 */
export default interface CommonValidator<V, T, P> {
    /**
     * Checks that the input is defined.
     */
    notUndefined(): ValidatorSyntax<V, T, P>

    /**
     * Checks that the input is undefined.
     */
    undefined(): ValidatorSyntax<V, T, P>

    /**
     * Checks that the input is not null.
     */
    notNull(): ValidatorSyntax<V, T, P>

    /**
     * Checks that the input is null.
     */
    null(): ValidatorSyntax<V, T, P>

    /**
     * Checks that the input is truthy.
     */
    truthy(): ValidatorSyntax<V, T, P>

    /**
     * Checks that the input is falsy.
     */
    falsy(): ValidatorSyntax<V, T, P>
}
