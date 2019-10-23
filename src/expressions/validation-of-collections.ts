import ValidationOf from '../types/validation-of'
import ValidationStep from '../types/validation-step'
import ValidationOfCollections from '../types/validation-of-collections'
import { IncludesLength, IncludesSize } from '../types/inputs'
import { createValidationOf } from './validation-state'

type LengthOrSize = IncludesSize | IncludesLength

/**
 * Tests if the given property has a length property.
 *
 * @param property Property to test.
 */
const hasLength = (property: LengthOrSize): property is IncludesLength => {
    return (property as IncludesLength).length !== undefined
}

/**
 * Tests if the given property has a size property.
 *
 * @param property Property to test.
 */
const hasSize = (property: LengthOrSize): property is IncludesSize => {
    return (property as IncludesSize).size !== undefined
}

/**
 * Retrieves the length or the size depending on the type. Defaults to 0 in
 * case it doesn't have any of those properties.
 *
 * @param property Property to retrieve the length or size from.
 */
const getLengthOrSize = <T extends LengthOrSize>(property: T): number =>
    hasLength(property)
        ? property.length
        : hasSize(property)
        ? property.size
        : 0

export default <T>(
    input: T,
    previousSteps: ValidationStep[],
): ValidationOfCollections<T> => ({
    lengthBetween<C extends LengthOrSize>(
        getter: (input: T) => C,
        min: number,
        max: number,
    ): ValidationOf<T> {
        const property = getter(input)
        const length = getLengthOrSize(property)
        const fulfillsValidation = min < length && length < max

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    notEmpty<C extends LengthOrSize>(getter: (input: T) => C): ValidationOf<T> {
        const property = getter(input)
        const length = getLengthOrSize(property)
        const fulfillsValidation = length > 0

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    maxLength<C extends LengthOrSize>(
        getter: (input: T) => C,
        max: number,
    ): ValidationOf<T> {
        const property = getter(input)
        const length = getLengthOrSize(property)
        const fulfillsValidation = length < max

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },

    minLength<C extends LengthOrSize>(
        getter: (input: T) => C,
        min: number,
    ): ValidationOf<T> {
        const property = getter(input)
        const length = getLengthOrSize(property)
        const fulfillsValidation = min < length

        return createValidationOf(input, previousSteps, {
            expression: {
                kind: 'validation',
                fulfillsValidation,
            },
        })
    },
})
