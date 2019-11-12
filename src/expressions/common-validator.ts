import { Input } from '../types/input'
import Step from '../types/step'
import CommonValidator from '../types/expressions/common-validator'
import createSyntax from '../syntax'
import { addValidationStep, propertyNameOrDefault } from '../utils'

const createCommonValidator = <V, T, P>(
    createValidator: (input: Input<T, P>, steps: Step[]) => V,
    input: Input<T, P>,
    steps: Step[],
): CommonValidator<V, T, P> => ({
    fulfills(validate) {
        const fulfillsValidation = validate(input.input)

        return createSyntax(
            createValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                'The input must fulfill the specified custom validation',
            ),
        )
    },

    notUndefined() {
        const fulfillsValidation = input.value !== undefined

        return createSyntax(
            createValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must not be undefined`,
            ),
        )
    },

    undefined() {
        const fulfillsValidation = input.value === undefined

        return createSyntax(
            createValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(
                    input.propertyName,
                )} must be undefined`,
            ),
        )
    },

    notNull() {
        const fulfillsValidation = input.value !== null

        return createSyntax(
            createValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must not be null`,
            ),
        )
    },

    null() {
        const fulfillsValidation = input.value === null

        return createSyntax(
            createValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be null`,
            ),
        )
    },

    falsy() {
        const fulfillsValidation = !input.value

        return createSyntax(
            createValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be falsy`,
            ),
        )
    },

    truthy() {
        const fulfillsValidation = !!input.value

        return createSyntax(
            createValidator,
            input,
            addValidationStep(
                steps,
                input.propertyName,
                fulfillsValidation,
                `${propertyNameOrDefault(input.propertyName)} must be truthy`,
            ),
        )
    },
})

export default createCommonValidator
