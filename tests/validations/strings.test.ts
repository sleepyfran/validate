import * as validationOf from '../../src/expressions/validations/of'
import validationOfStrings from '../../src/expressions/validations/strings'
import { assertSteps, assertValidationWithResult } from '../utils'

const validationOfSpy = jest.spyOn(validationOf, 'default')

describe('alphanumeric', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if alphanumeric', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfStrings('test', []).alphanumeric(s => s)
    })

    it('should add a failed validation if not alphanumeric', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfStrings('!{}', []).alphanumeric(s => s)
    })
})
