import Validation from '../src/index'
import * as syntaxModule from '../src/syntax'
import { assertStepsWithCreator, assertValidationWithResult } from './utils'
import * as validator from 'validator'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

describe('alphanumeric', () => {
    test('when input is alphanumeric', () => {
        jest.spyOn(validator, 'isAlphanumeric').mockReturnValue(true)
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('test').alphanumeric()
    })

    test('when input is not alphanumeric', () => {
        jest.spyOn(validator, 'isAlphanumeric').mockReturnValue(false)
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('!test').alphanumeric()
    })
})

describe('contains', () => {
    test('when input contains the specified value', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('testing this').contains('this')
        Validation.of('testing this').contains('t')
        Validation.of('testing this').contains('hi')
    })

    test('when input does not contain the specified value', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('this is a test').contains('thos')
        Validation.of('this is a test').contains(' a tost')
        Validation.of('this is a test').contains('u')
    })
})

describe('notEmpty', () => {
    test('when input is not empty', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('test').notEmpty()
    })

    test('when input is empty', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('').notEmpty()
    })
})

describe('minLength', () => {
    test('when input has length greater than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('tes').minLength(1)
    })

    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').minLength(5)
    })

    test('when input has same length as min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').minLength(3)
    })
})

describe('maxLength', () => {
    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('tes').maxLength(5)
    })

    test('when input has length greater than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').maxLength(2)
    })

    test('when input has same length as max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').maxLength(3)
    })
})

describe('lengthBetween', () => {
    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').lengthBetween(10, 15)
    })

    test('when input has length equal to min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').lengthBetween(3, 5)
    })

    test('when input has length between min and max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('tes').lengthBetween(1, 5)
    })

    test('when input has length greater than max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').lengthBetween(0, 2)
    })

    test('when input has length equal to max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').lengthBetween(1, 3)
    })
})

describe('inclusiveLengthBetween', () => {
    test('when input has length less than min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').inclusiveLengthBetween(10, 15)
    })

    test('when input has length equal to min', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('tes').inclusiveLengthBetween(3, 5)
    })

    test('when input has length between min and max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('tes').inclusiveLengthBetween(1, 5)
    })

    test('when input has length greater than max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(false))

        Validation.of('tes').inclusiveLengthBetween(0, 2)
    })

    test('when input has length equal to max', () => {
        assertStepsWithCreator(syntaxSpy, assertValidationWithResult(true))

        Validation.of('tes').inclusiveLengthBetween(1, 3)
    })
})
