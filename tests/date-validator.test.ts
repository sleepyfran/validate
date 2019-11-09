import Validation from '../src/index'
import * as syntaxModule from '../src/syntax'
import {
    assertStepsWithCreator,
    assertValidationWithResult,
    UndefinedProperty,
} from './utils'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

const undefinedInput: UndefinedProperty<Date> = {}

describe('after', () => {
    test('when input is after given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 11, 2)).after(new Date(2019, 10, 2))
    })

    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(undefinedInput)
            .property('property')
            .after(new Date())
    })

    test('when input is the same as given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).after(new Date(2019, 11, 2))
    })

    test('when input is before given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).after(new Date(2019, 12, 2))
    })
})

describe('before', () => {
    test('when input is before given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 9, 2)).before(new Date(2019, 10, 2))
    })

    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(undefinedInput)
            .property('property')
            .before(new Date())
    })

    test('when input is the same as given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).before(new Date(2019, 11, 2))
    })

    test('when input is after given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).before(new Date(2019, 10, 2))
    })
})

describe('between', () => {
    test('when input is between given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 10, 2)).between(
            new Date(2019, 9, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(undefinedInput)
            .property('property')
            .between(new Date(), new Date())
    })

    test('when input is the same as past date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 9, 2)).between(
            new Date(2019, 9, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is the same as future date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).between(
            new Date(2019, 9, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is the same as both dates', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).between(
            new Date(2019, 11, 2),
            new Date(2019, 11, 2),
        )
    })

    test('when input is after future date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 11, 2)).between(
            new Date(2019, 8, 2),
            new Date(2019, 10, 2),
        )
    })
})

describe('same', () => {
    test('when input is the same given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(new Date(2019, 11, 2)).same(new Date(2019, 11, 2))
    })

    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(undefinedInput)
            .property('property')
            .same(new Date())
    })

    test('when input is not the same as given date', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(new Date(2019, 10, 2)).same(new Date(2019, 11, 2))
    })
})
