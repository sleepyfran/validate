import ValidationOfStrings from './validation-of-strings'
import ValidationOfCollections from './validation-of-collections'
import ValidationOfDates from './validation-of-dates'

/**
 * Applicable validations that can follow an operator such as `and()`.
 */
export default interface ValidationOperators<T>
    extends ValidationOfStrings<T>,
        ValidationOfCollections<T>,
        ValidationOfDates<T> {}
