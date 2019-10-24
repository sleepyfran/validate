import ValidationStep, { ValidationExpression } from '../src/types/step'
import ValidationOf from '../src/types/validations/of'

/**
 * Asserts that the given steps has one validation step that evaluated to `result`.
 *
 * @param result Expected result
 */
export const assertValidationWithResult = (result: boolean) => (
    steps: ValidationStep[],
) => {
    expect(steps).toHaveLength(1)

    const expression = (steps[0].expression as unknown) as ValidationExpression
    expect(expression.kind).toEqual('validation')
    expect(expression.fulfillsValidation).toEqual(result)
}

/**
 * Mocks the implementation of a spy and calls an assert function with the
 * steps the spy retrieved.
 *
 * @param spy Spy to mock.
 * @param assert Assert function to apply with the retrieved steps.
 */
export const assertSteps = (
    spy: jest.SpyInstance<ValidationOf<unknown>>,
    assert: (steps: ValidationStep[]) => void,
): void => {
    spy.mockImplementation((input, steps) => {
        assert(steps)
        return {} as ValidationOf<unknown>
    })
}
