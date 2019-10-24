import ValidationOfStrings from './strings'
import ValidationOfCollections from './collections'
import ValidationOfDates from './dates'

/**
 * Applicable validations that can follow an operator such as `and()`.
 */
export default interface Operators<T>
    extends ValidationOfStrings<T>,
        ValidationOfCollections<T>,
        ValidationOfDates<T> {}
