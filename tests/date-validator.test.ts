import Validation from '../src/index'
import * as syntaxModule from '../src/syntax'
import { assertSteps, assertValidationWithResult } from './utils'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

describe('after', () => {
    test('when input is after given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 11, 2)).after(new Date(2019, 10, 2))
    })

    test('when input is the same as given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).after(new Date(2019, 11, 2))
    })

    test('when input is before given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).after(new Date(2019, 12, 2))
    })
})

describe('before', () => {
    test('when input is before given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 9, 2)).before(new Date(2019, 10, 2))
    })

    test('when input is the same as given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).before(new Date(2019, 11, 2))
    })

    test('when input is after given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).before(new Date(2019, 10, 2))
    })
})

describe('between', () => {
    test('when input is between given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 10, 2)).between(
            new Date(2019, 9, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is the same as past date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 9, 2)).between(
            new Date(2019, 9, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is the same as future date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).between(
            new Date(2019, 9, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is the same as both dates', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).between(
            new Date(2019, 11, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is after future date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).between(
            new Date(2019, 8, 2),
            new Date(2019, 10, 2),
        )
    })
})

describe('same', () => {
    test('when input is the same given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 11, 2)).same(new Date(2019, 11, 2))
    })

    test('when input is not the same as given date', () => {
        assertSteps(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 10, 2)).same(new Date(2019, 11, 2))
    })
})
