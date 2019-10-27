/**
 * Defines a validation error that may include the error code, error message
 * or the property that produced the error.
 */
export interface ValidationError<T> {
    code?: number
    message?: string
    property?: keyof T
}

/**
 * Defines the operations that can be done with the validation's result.
 */
export interface Result<T> {
    /**
     * Pattern matches against the result, which calls the given `onError` or
     * `onSuccess` depending on the state of the result.
     *
     * @param onError Callback for when the result contains validation errors;
     * passes said errors as the parameter.
     * @param onSuccess Callback for when the validation was successful; passes
     * the initial object as the parameter.
     */
    fold(
        onError: (errors: ValidationError<T>[]) => void,
        onSuccess: (object: T) => void,
    ): void

    /**
     * Returns whether the validation was successful or not.
     */
    hasErrors(): boolean

    /**
     * Returns all the validation errors that were produced during the
     * validation.
     */
    errors(): ValidationError<T>[]
}
