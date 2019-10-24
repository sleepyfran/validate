import ValidationOfStrings from './strings'
import ValidationOfCollections from './collections'
import ValidationInfo from './info'
import ValidationConditions from './conditions'
import ValidationOfDates from './dates'
import ValidationOfNumbers from './numbers'
import { Result } from '../result'

/**
 * A set of applicable validations that have the base object already applied.
 */
export default interface Of<T>
    extends ValidationOfStrings<T>,
        ValidationOfCollections<T>,
        ValidationOfDates<T>,
        ValidationOfNumbers<T>,
        ValidationConditions<T>,
        ValidationInfo<T> {
    /**
     * Returns the result of the validation.
     */
    result(): Result<T>
}
