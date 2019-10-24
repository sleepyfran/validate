/**
 * Defines a validation and whether it has passed or not.
 */
export interface ValidationExpression {
    kind: 'validation'
    fulfillsValidation: boolean
}

/**
 * Defines whether a condition has been met in the pipeline or not.
 */
export interface ConditionExpression {
    kind: 'condition'
    fulfillsCondition: boolean
}

/**
 * Defines a message or code to append to the previous validations.
 */
export interface InfoExpression {
    kind: 'info'
    message?: string
    code?: number | string
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
    | InfoExpression
    | OperatorExpression

type Step = {
    expression: Expression
}

export default Step
