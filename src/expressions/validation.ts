import Validation from '../types/validation'
import validationOf from './of'

const validation: Validation = {
    of: input => {
        return validationOf(input, [])
    },
}

export default validation
