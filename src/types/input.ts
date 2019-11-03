/**
 * Defines the input of the validator. Needed to keep track of the input,
 * property and value that was passed to the validator for later usage.
 */
export type Input<Type, Value> = {
    input: Type
    propertyName: string
    value: Value
}
