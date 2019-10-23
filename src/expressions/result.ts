import { Result, ValidationError } from '../types/result'
import ValidationStep from '../types/validation-step'

export default <T>(input: T, validationSteps: ValidationStep[]): Result<T> => ({
    combineWith<U>(result: Result<U>): Result<U> {
        return this.combineWith(result)
    },

    combineWithLeft<U>(result: Result<U>): Result<T> {
        return this.combineWithLeft(result)
    },

    fold(
        onError: (errors: ValidationError<T>[]) => void,
        onSuccess: (object: T) => void,
    ) {
        this.hasErrors() ? onError(this.errors()) : onSuccess(input)
    },

    hasErrors() {
        return this.errors().length > 0
    },

    errors: () => {
        return []
    },
})
