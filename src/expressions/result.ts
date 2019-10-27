import { Result } from '../types/result'
import ValidationStep from '../types/step'

export default <T>(input: T, validationSteps: ValidationStep[]): Result<T> => ({
    fold(onError, onSuccess) {
        this.hasErrors() ? onError(this.errors()) : onSuccess(input)
    },

    hasErrors() {
        return this.errors().length > 0
    },

    errors: () => {
        return []
    },
})
