import StringValidator from './string-validator'
import CollectionValidator from './collections-validator'
import NumberValidator from './number-validator'
import DateValidator from './date-validator'
import ObjectValidator from './object-validator'

/**
 * Conditionally returns a validation interface depending on the given input.
 */
type Validator<T> = T extends string
    ? StringValidator
    : T extends []
    ? CollectionValidator
    : T extends number
    ? NumberValidator
    : T extends Date
    ? DateValidator
    : ObjectValidator<T>

export default Validator
