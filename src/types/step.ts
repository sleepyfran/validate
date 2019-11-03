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

/**
 * Defines an operator in the validation pipeline.
 */
export interface OperatorExpression {
    kind: 'operator'
    type: 'and' | 'or'
}

export type Expression =
    | ValidationExpression
    | ConditionExpression
    | OperatorExpression

type Step = {
    expression: Expression
}

export default Step
