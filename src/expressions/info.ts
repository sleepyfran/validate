import Step, { ValidationExpression } from '../types/step'
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
import ValidatorSyntax from '../types/syntax'

const createValidationOf = <T, P>(
    input: Input<T, P>,
    steps: Step[],
): Validator<T, P> =>
    createValidation(steps).of<T, P, keyof T>(
        input.input,
        input.propertyName as keyof T,
    )

/**
 * Updates the last step of a given list of steps if possible applying the given
 * updater function.
 *
 * @param input Current input of the validation.
 * @param steps List of the steps until now.
 * @param updater Function to apply to the last element, if possible.
 */
const updateLastStepWithInfo = <T, P>(
    input: Input<T, P>,
    steps: Step[],
    updater: (expression: ValidationExpression) => ValidationExpression,
): ValidatorSyntax<Validator<T, P>, T, P> => {
    const clonedSteps = [...steps]
    const lastStep = clonedSteps.pop()
    if (!lastStep) return createSyntax(createValidationOf, input, steps)
    if (!isValidationExpression(lastStep.expression))
        return createSyntax(createValidationOf, input, steps)

    const updatedSteps = [
        ...clonedSteps,
        {
            ...lastStep,
            expression: updater(lastStep.expression),
        },
    ]

    return createSyntax(createValidationOf, input, updatedSteps)
}

const createInfo = <T, P>(input: Input<T, P>, steps: Step[]): Info<T, P> => ({
    withPropertyName: propertyName =>
        updateLastStepWithInfo(input, steps, expression =>
            updatePropertyName(expression, propertyName),
        ),

    withCode: code =>
        updateLastStepWithInfo(input, steps, expression =>
            updateCode(expression, code),
        ),

    withMessage: message =>
        updateLastStepWithInfo(input, steps, expression =>
            updateMessage(expression, message),
        ),
})

export default createInfo
