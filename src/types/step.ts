/**
 * Defines a validation and whether it has passed or not.
 */
export interface ValidationExpression {
    kind: 'validation'
    fulfillsValidation: boolean
    property: string
    message: string
    code?: number | string
}

/**
 * Defines whether a condition has been met in the pipeline or not.
 */
export interface ConditionExpression {
    kind: 'condition'
    applyValidations: boolean
}

export type Expression = ValidationExpression | ConditionExpression

type Step = {
    expression: Expression
}

export default Step
