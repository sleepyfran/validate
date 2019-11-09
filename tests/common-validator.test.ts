import Validation from '../src/index'
import * as syntaxModule from '../src/syntax'
import { assertStepsWithCreator, assertValidationWithResult } from './utils'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

describe('notUndefined', () => {
    test('when input is not undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('test').notUndefined()
    })

    test('when input is null', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(null).notUndefined()
    })

    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(undefined).notUndefined()
    })
})

describe('undefined', () => {
    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(undefined).undefined()
    })

    test('when input is null', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(null).undefined()
    })

    test('when input is not undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('test').undefined()
    })
})

describe('notNull', () => {
    test('when input is not null', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('test').notNull()
    })

    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(undefined).notNull()
    })

    test('when input is null', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(null).notNull()
    })
})

describe('null', () => {
    test('when input is null', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(null).null()
    })

    test('when input is undefined', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(undefined).null()
    })

    test('when input is not null', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('test').null()
    })
})

describe('falsy', () => {
    test('when input is falsy', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of(undefined).falsy()
        Validation.of(null).falsy()
        Validation.of(0).falsy()
        Validation.of('').falsy()
        Validation.of(NaN).falsy()
        Validation.of(false).falsy()
    })

    test('when input is not falsy', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('test').falsy()
        Validation.of([]).falsy()
        Validation.of([1, 2, 3]).falsy()
        Validation.of(new Date()).falsy()
        Validation.of(1).falsy()
        Validation.of(true).falsy()
    })
})

describe('truthy', () => {
    test('when input is truthy', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('test').truthy()
        Validation.of([]).truthy()
        Validation.of([1, 2, 3]).truthy()
        Validation.of(new Date()).truthy()
        Validation.of(1).truthy()
        Validation.of(true).truthy()
    })

    test('when input is not truthy', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of(undefined).truthy()
        Validation.of(null).truthy()
        Validation.of(0).truthy()
        Validation.of('').truthy()
        Validation.of(NaN).truthy()
        Validation.of(false).truthy()
    })
})
