import StringValidator from './string-validator'
import CollectionValidator from './collections-validator'
import NumberValidator from './number-validator'
import DateValidator from './date-validator'
import ObjectValidator from './object-validator'

/**
 * Conditionally returns a validation interface depending on the given input.
 */
type Validator<T, P> = string extends P
    ? StringValidator<T>
    : any[] extends P
    ? CollectionValidator<T>
    : [] extends P
    ? CollectionValidator<T>
    : number extends P
    ? NumberValidator<T>
    : Date extends P
    ? DateValidator<T>
    : ObjectValidator<P>

export default Validator
