import ValidationStep from '../types/validation-step'
import validationOf from './validation-of'
import validationEnd from './validation-end'

/**
 * Creates a new `ValidationOf` based on the input, previous steps and a new
 * step to concat.
 *
 * @param input Input of the validation.
 * @param steps Previous steps of the validation.
 * @param step New step to append.
 */
export const createValidationOf = <T>(
    input: T,
    steps: ValidationStep[],
    step: ValidationStep,
) => validationOf(input, concat(steps, step))

/**
 * Creates a new `ValidationEnd` based on the input, previous steps and a new
 * step to concat.
 *
 * @param input Input of the validation.
 * @param steps Previous steps of the validation.
 * @param step New step to append.
 */
export const createValidationEnd = <T>(
    input: T,
    steps: ValidationStep[],
    step: ValidationStep,
) => validationEnd(input, concat(steps, step))

/**
 * Creates a new array containing the existing validation steps plus a new
 * expression.
 *
 * @param steps Existing validation steps.
 * @param step New step to add.
 */
export const concat = (steps: ValidationStep[], step: ValidationStep) => [
    ...steps,
    step,
]
