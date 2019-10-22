import ValidationOfStrings from './validation-of-strings'
import ValidationOfCollections from './validation-of-collections'
import ValidationInfo from './validation-info'
import ValidationConditions from './validation-conditions'
import ValidationOfDates from './validation-of-dates'
import { Result } from './result'

/**
 * A set of applicable validations that have the base object already applied.
 */
export default interface ValidationOf<T>
    extends ValidationOfStrings<T>,
        ValidationOfCollections<T>,
        ValidationOfDates<T>,
        ValidationConditions<T>,
        ValidationInfo<T> {
    /**
     * Returns the result of the validation.
     */
    result(): Result<T>
}
