import Validation from '../src/index'
import * as syntaxModule from '../src/syntax'
import { assertSteps, assertValidationWithResult } from './utils'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

describe('zero', () => {
    test('when input is zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(0).zero()
    })

    test('when input is not zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(1).zero()
    })
})

describe('positive', () => {
    test('when input is more than zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(10).positive()
    })

    test('when input is less than zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(-10).positive()
    })

    test('when input is zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(0).positive()
    })
})

describe('negative', () => {
    test('when input is less than zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(-10).negative()
    })

    test('when input is more than zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(10).negative()
    })

    test('when input is zero', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(0).negative()
    })
})

describe('equals', () => {
    test('when input equals the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(10).equals(10)
    })

    test('when input does not equal the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(10).equals(5)
    })
})

describe('greaterThan', () => {
    test('when input is greater than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(20).greaterThan(10)
    })

    test('when input is less than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(5).greaterThan(10)
    })

    test('when input is equal to the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(10).greaterThan(10)
    })
})

describe('greaterThanOrEqual', () => {
    test('when input is greater than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(20).greaterThanOrEqual(10)
    })

    test('when input is equal to the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(10).greaterThanOrEqual(10)
    })

    test('when input is less than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(5).greaterThanOrEqual(10)
    })
})

describe('lessThan', () => {
    test('when input is less than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(5).lessThan(10)
    })

    test('when input is greater than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(15).lessThan(10)
    })

    test('when input is equal to the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(10).lessThan(10)
    })
})

describe('lessThanOrEqual', () => {
    test('when input is less than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(5).lessThanOrEqual(10)
    })

    test('when input is equal to the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(10).lessThanOrEqual(10)
    })

    test('when input is greater than the given number', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(15).lessThanOrEqual(10)
    })
})
