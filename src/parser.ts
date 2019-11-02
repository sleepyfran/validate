import Step, {
    ConditionExpression,
    Expression,
    InfoExpression,
    OperatorExpression,
    ValidationExpression,
} from './types/step'
import { Result, ValidationError } from './types/result'
import createResult from './expressions/result'
import { skip } from './utils'

const isValidationExpression = (
    expression: Expression,
): expression is ValidationExpression => expression.kind === 'validation'

const isConditionExpression = (
    expression: Expression,
): expression is ConditionExpression => expression.kind === 'condition'

const isInfoExpression = (
    expression: Expression,
): expression is InfoExpression => expression.kind === 'info'

const isOperatorExpression = (
    expression: Expression,
): expression is OperatorExpression => expression.kind === 'operator'

type ParserState = {
    propertyResult: [string, boolean][]
    message?: string
    code?: number
}

const parseValidationExpression = (
    state: ParserState,
    expression: ValidationExpression,
): ParserState => {
    return {
        ...state,
        propertyResult: [
            ...state.propertyResult,
            [expression.property, expression.fulfillsValidation],
        ],
    }
}

const parseConditionExpression = (
    state: ParserState,
    expression: ConditionExpression,
): ParserState => {
    return {
        ...state,
        propertyResult: expression.applyValidations ? state.propertyResult : [],
    }
}

const parseAndOperator = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): [string, boolean][] => {
    const tail = skip(steps, currentIndex)
    const tailState = parseSteps(tail)

    return state.propertyResult.concat(tailState.propertyResult)
}

const hasErrors = (errors: [string, boolean][]) => errors.some(err => err[1])

const parseOrOperator = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): [string, boolean][] => {
    const tail = skip(steps, currentIndex)
    const tailState = parseSteps(tail)

    return hasErrors(state.propertyResult)
        ? hasErrors(tailState.propertyResult)
            ? state.propertyResult.concat(tailState.propertyResult)
            : tailState.propertyResult
        : state.propertyResult
}

const parseOperatorExpression = (
    state: ParserState,
    expression: OperatorExpression,
    steps: Step[],
    currentIndex: number,
): ParserState => {
    return {
        ...state,
        propertyResult:
            expression.type === 'and'
                ? parseAndOperator(state, expression, steps, currentIndex)
                : parseOrOperator(state, expression, steps, currentIndex),
    }
}

const parseSteps = (steps: Step[]): ParserState => {
    const initialState: ParserState = {
        propertyResult: [],
    }

    return steps.reduce((state, step, index) => {
        const expression = step.expression

        if (isValidationExpression(expression)) {
            return parseValidationExpression(state, expression)
        }

        if (isConditionExpression(expression)) {
            return parseConditionExpression(state, expression)
        }

        if (isInfoExpression(expression)) {
        }

        if (isOperatorExpression(expression)) {
            return parseOperatorExpression(state, expression, steps, index)
        }

        return initialState
    }, initialState)
}

export const parse = <T>(input: T, steps: Step[]): Result<T> => {
    const parsedSteps = parseSteps(steps)

    const validationErrors: ValidationError[] = parsedSteps.propertyResult
        .filter(err => !err[1])
        .map(err => ({
            property: err[0],
        }))

    return createResult(input, validationErrors)
}
