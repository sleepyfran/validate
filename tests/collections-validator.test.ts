import Validation from '../src/index'
import * as syntaxModule from '../src/syntax'
import { assertStepsWithCreator, assertValidationWithResult } from './utils'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

describe('empty', () => {
    test('when input is empty', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([]).empty()
    })

    test('when input is not empty', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).empty()
    })
})

describe('notEmpty', () => {
    test('when input is not empty', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([1, 2, 3]).notEmpty()
    })

    test('when input is empty', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([]).notEmpty()
    })
})

describe('minLength', () => {
    test('when input has length greater than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([1, 2, 3]).minLength(1)
    })

    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).minLength(5)
    })

    test('when input has same length as min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).minLength(3)
    })
})

describe('maxLength', () => {
    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([1, 2, 3]).maxLength(5)
    })

    test('when input has length greater than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).maxLength(2)
    })

    test('when input has same length as max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).maxLength(3)
    })
})

describe('lengthBetween', () => {
    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).lengthBetween(10, 15)
    })

    test('when input has length equal to min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).lengthBetween(3, 5)
    })

    test('when input has length between min and max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([1, 2, 3]).lengthBetween(1, 5)
    })

    test('when input has length greater than max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).lengthBetween(0, 2)
    })

    test('when input has length equal to max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).lengthBetween(1, 3)
    })
})

describe('inclusiveLengthBetween', () => {
    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).inclusiveLengthBetween(10, 15)
    })

    test('when input has length equal to min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([1, 2, 3]).inclusiveLengthBetween(3, 5)
    })

    test('when input has length between min and max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([1, 2, 3]).inclusiveLengthBetween(1, 5)
    })

    test('when input has length greater than max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of([1, 2, 3]).inclusiveLengthBetween(0, 2)
    })

    test('when input has length equal to max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of([1, 2, 3]).inclusiveLengthBetween(1, 3)
    })
})
