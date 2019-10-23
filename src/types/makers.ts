import ValidationStep from './validation-step'
import ValidationOf from './validation-of'
import ValidationEnd from './validation-end'

export type MakeValidationOf<T> = (
    input: T,
    steps: ValidationStep[],
) => ValidationOf<T>

export type MakeValidationEnd<T> = (
    input: T,
    steps: ValidationStep[],
) => ValidationEnd<T>
