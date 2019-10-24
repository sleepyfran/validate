import * as validationOf from '../../src/expressions/validations/of'
import validationOfNumbers from '../../src/expressions/validations/numbers'
import { assertSteps, assertValidationWithResult } from '../utils'

const validationOfSpy = jest.spyOn(validationOf, 'default')

describe('zero', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if zero', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfNumbers(0, []).zero(n => n)
    })

    it('should add a failed validation if not zero', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfNumbers(-1, []).zero(n => n)
        validationOfNumbers(1, []).zero(n => n)
        validationOfNumbers(10, []).zero(n => n)
    })
})

describe('positive', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if positive', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfNumbers(1, []).positive(n => n)
        validationOfNumbers(5, []).positive(n => n)
        validationOfNumbers(10, []).positive(n => n)
    })

    it('should add a failed validation if not positive', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfNumbers(-1, []).positive(n => n)
        validationOfNumbers(-5, []).positive(n => n)
        validationOfNumbers(-10, []).positive(n => n)
    })
})

describe('negative', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if negative', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfNumbers(-1, []).negative(n => n)
        validationOfNumbers(-5, []).negative(n => n)
        validationOfNumbers(-10, []).negative(n => n)
    })

    it('should add a failed validation if not negative', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfNumbers(1, []).negative(n => n)
        validationOfNumbers(5, []).negative(n => n)
        validationOfNumbers(10, []).negative(n => n)
    })
})

describe('greaterThan', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if greater than given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfNumbers(1, []).greaterThan(n => n, 0)
        validationOfNumbers(5, []).greaterThan(n => n, 4)
        validationOfNumbers(10, []).greaterThan(n => n, 5)
    })

    it('should add a failed validation if not greater than given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfNumbers(1, []).greaterThan(n => n, 2)
        validationOfNumbers(5, []).greaterThan(n => n, 10)
        validationOfNumbers(10, []).greaterThan(n => n, 100)
    })
})

describe('greaterThanOrEqual', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if greater than or equal to given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfNumbers(1, []).greaterThanOrEqual(n => n, 1)
        validationOfNumbers(5, []).greaterThanOrEqual(n => n, 4)
        validationOfNumbers(10, []).greaterThanOrEqual(n => n, 10)
    })

    it('should add a failed validation if not greater than or not equal to given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfNumbers(1, []).greaterThanOrEqual(n => n, 2)
        validationOfNumbers(5, []).greaterThanOrEqual(n => n, 10)
        validationOfNumbers(10, []).greaterThanOrEqual(n => n, 100)
    })
})

describe('lessThan', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if less than given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfNumbers(1, []).lessThan(n => n, 2)
        validationOfNumbers(5, []).lessThan(n => n, 10)
        validationOfNumbers(10, []).lessThan(n => n, 11)
    })

    it('should add a failed validation if not less than given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfNumbers(1, []).lessThan(n => n, 1)
        validationOfNumbers(5, []).lessThan(n => n, 4)
        validationOfNumbers(10, []).lessThan(n => n, 9)
    })
})

describe('lessThanOrEqual', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if less than or equal to given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfNumbers(1, []).lessThanOrEqual(n => n, 1)
        validationOfNumbers(5, []).lessThanOrEqual(n => n, 10)
        validationOfNumbers(10, []).lessThanOrEqual(n => n, 11)
    })

    it('should add a failed validation if not less than or not equal to given number', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfNumbers(1, []).lessThanOrEqual(n => n, 0)
        validationOfNumbers(5, []).lessThanOrEqual(n => n, 4)
        validationOfNumbers(10, []).lessThanOrEqual(n => n, 8)
    })
})
