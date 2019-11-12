import Step from '../types/step'
import Info from '../types/expressions/info'
import { Input } from '../types/input'
import {
    isValidationExpression,
    updateCode,
    updateMessage,
    updatePropertyName,
} from '../utils'
import createValidation from '../validation'
import Validator from '../types/expressions/validator'
import createSyntax from '../syntax'

const createValidationOf = <T, P>(
    input: Input<T, P>,
    steps: Step[],
): Validator<T, P> =>
    createValidation(steps).of<T, P, keyof T>(
        input.input,
        input.propertyName as keyof T,
    )

const createInfo = <T, P>(input: Input<T, P>, steps: Step[]): Info<T, P> => ({
    withPropertyName(propertyName) {
        const clonedSteps = [...steps]
        const lastStep = clonedSteps.pop()
        if (!lastStep) return createSyntax(createValidationOf, input, steps)
        if (!isValidationExpression(lastStep.expression))
            return createSyntax(createValidationOf, input, steps)

        const updatedSteps = [
            ...clonedSteps,
            {
                ...lastStep,
                expression: updatePropertyName(
                    lastStep.expression,
                    propertyName,
                ),
            },
        ]

        return createSyntax(createValidationOf, input, updatedSteps)
    },

    withCode(code) {
        const clonedSteps = [...steps]
        const lastStep = clonedSteps.pop()
        if (!lastStep) return createSyntax(createValidationOf, input, steps)
        if (!isValidationExpression(lastStep.expression))
            return createSyntax(createValidationOf, input, steps)

        const updatedSteps = [
            ...clonedSteps,
            { ...lastStep, expression: updateCode(lastStep.expression, code) },
        ]

        return createSyntax(createValidationOf, input, updatedSteps)
    },

    withMessage(message) {
        const clonedSteps = [...steps]
        const lastStep = clonedSteps.pop()
        if (!lastStep) return createSyntax(createValidationOf, input, steps)
        if (!isValidationExpression(lastStep.expression))
            return createSyntax(createValidationOf, input, steps)

        const updatedSteps = [
            ...clonedSteps,
            {
                ...lastStep,
                expression: updateMessage(lastStep.expression, message),
            },
        ]

        return createSyntax(createValidationOf, input, updatedSteps)
    },
})

export default createInfo
