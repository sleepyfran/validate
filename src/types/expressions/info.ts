import ChainEnd from './chain-end'
import Operators from './operators'
import Conditions from './conditions'

export default interface Info<T, P> {
    /**
     * Adds an error code to the validation. Calling this function ends the
     * current validation chain.
     *
     * @param code Error code to add to the validation.
     */
    withCode(
        code: string | number,
    ): ChainEnd<T> & Conditions<T, P> & Operators<T, P>

    /**
     * Adds an error message to the validation. Calling this function ends the
     * current validation chain.
     *
     * @param message Error message to add to the validation.
     */
    withMessage(
        message: string,
    ): ChainEnd<T> & Conditions<T, P> & Operators<T, P>
}
