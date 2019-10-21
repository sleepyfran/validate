import ValidationOfStrings from './validation-of-strings'
import ValidationOfCollections from './validation-of-collections'

export default interface ValidationOperators<T>
    extends ValidationOfStrings<T>,
        ValidationOfCollections<T> {}
