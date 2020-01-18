import { Severity } from './severity'

/**
 * Defines a validation error that may include the error code, error message
 * or the property that produced the error.
 */
export interface ValidationError {
    code?: number | string
    message: string
    property: string
    severity?: Severity
}

/**
 * Defines the operations that can be done with the validation's result.
 */
export interface Result<T> {
    /**
     * Combines the current result with another one. This only combines error
     * validation states and returns whatever object was given to the parameter's
     * result.
     *
     * @param result Result to combine with the current one.
     */
    combineWith<U>(result: Result<U>): Result<U>

    /**
     * Same as `combineWith` but returns the object contained in the current
     * Result rather than the parameter's one.
     *
     * @param result Result to combine with the current one.
     */
    combineWithLeft<U>(result: Result<U>): Result<T>

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
        onError: (errors: ValidationError[]) => void,
        onSuccess: (object: T) => void,
    ): void

    /**
     * Returns the input that was given to the validation.
     */
    input(): T

    /**
     * Returns whether the validation was successful or not.
     */
    hasErrors(): boolean

    /**
     * Returns all the validation errors that were produced during the
     * validation.
     */
    errors(): ValidationError[]
}
