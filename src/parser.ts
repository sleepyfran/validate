import Step from './types/step'
import { Result } from './types/result'
import createResult from './expressions/result'

const parseSteps = <T>(input: T, steps: Step[]): Result<T> => {
    return createResult(input, [])
}
