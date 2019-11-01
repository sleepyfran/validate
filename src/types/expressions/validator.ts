import StringValidator from './string-validator'
import CollectionValidator from './collections-validator'
import NumberValidator from './number-validator'
import DateValidator from './date-validator'
import ObjectValidator from './object-validator'

/**
 * Conditionally returns a validation interface depending on the given input.
 */
type Validator<T, P> = P extends string
    ? StringValidator<T>
    : P extends []
    ? CollectionValidator<T>
    : P extends number
    ? NumberValidator<T>
    : P extends Date
    ? DateValidator<T>
    : ObjectValidator<P>

export default Validator
