import { Result, ValidationError } from '../types/result'

const createResult = <T>(input: T, errors: ValidationError[]): Result<T> => ({
    input() {
        return input
    },

    combineWith<U>(result: Result<U>): Result<U> {
        return createResult(result.input(), [...errors, ...result.errors()])
    },

    combineWithLeft<U>(result: Result<U>): Result<T> {
        return createResult(input, [...errors, ...result.errors()])
    },

    fold(onError, onSuccess) {
        this.hasErrors() ? onError(this.errors()) : onSuccess(input)
    },

    hasErrors() {
        return this.errors().length > 0
    },

    errors: () => {
        return errors
    },
})

export default createResult
