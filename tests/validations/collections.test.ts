import * as validationOf from '../../src/expressions/validations/of'
import validationOfCollections from '../../src/expressions/validations/collections'
import { assertSteps, assertValidationWithResult } from '../utils'

const validationOfSpy = jest.spyOn(validationOf, 'default')

const inputString = 'tes'
const inputArray = [1, 2, 3]
const inputSet = new Set(inputArray)
const inputMap = new Map([[1, 1], [2, 2], [3, 3]])

describe('lengthBetween', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if input is between the range', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfCollections(inputString, []).lengthBetween(n => n, 0, 10)
        validationOfCollections(inputArray, []).lengthBetween(n => n, 0, 10)
        validationOfCollections(inputSet, []).lengthBetween(n => n, 0, 10)
        validationOfCollections(inputMap, []).lengthBetween(n => n, 0, 10)
    })

    it('should add a failed validation if input is outside the range', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfCollections(inputString, []).lengthBetween(n => n, 4, 10)
        validationOfCollections(inputArray, []).lengthBetween(n => n, 4, 10)
        validationOfCollections(inputSet, []).lengthBetween(n => n, 4, 10)
        validationOfCollections(inputMap, []).lengthBetween(n => n, 4, 10)
    })
})

describe('notEmpty', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if input is not empty', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfCollections(inputString, []).notEmpty(n => n)
        validationOfCollections(inputArray, []).notEmpty(n => n)
        validationOfCollections(inputSet, []).notEmpty(n => n)
        validationOfCollections(inputMap, []).notEmpty(n => n)
    })

    it('should add a failed validation if input is empty', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfCollections('', []).notEmpty(n => n)
        validationOfCollections([], []).notEmpty(n => n)
        validationOfCollections(new Set([]), []).notEmpty(n => n)
        validationOfCollections(new Map(), []).notEmpty(n => n)
    })
})

describe('maxLength', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if input has a smaller length than the given max', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfCollections(inputString, []).maxLength(n => n, 10)
        validationOfCollections(inputArray, []).maxLength(n => n, 10)
        validationOfCollections(inputSet, []).maxLength(n => n, 10)
        validationOfCollections(inputMap, []).maxLength(n => n, 10)
    })

    it('should add a passed validation if input has a bigger length than the given max', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfCollections(inputString, []).maxLength(n => n, 2)
        validationOfCollections(inputArray, []).maxLength(n => n, 2)
        validationOfCollections(inputSet, []).maxLength(n => n, 2)
        validationOfCollections(inputMap, []).maxLength(n => n, 2)
    })
})

describe('minLength', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if input has a bigger length than the given min', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfCollections(inputString, []).minLength(n => n, 2)
        validationOfCollections(inputArray, []).minLength(n => n, 2)
        validationOfCollections(inputSet, []).minLength(n => n, 2)
        validationOfCollections(inputMap, []).minLength(n => n, 2)
    })

    it('should add a passed validation if input has a smaller length than the given min', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfCollections(inputString, []).minLength(n => n, 5)
        validationOfCollections(inputArray, []).minLength(n => n, 5)
        validationOfCollections(inputSet, []).minLength(n => n, 5)
        validationOfCollections(inputMap, []).minLength(n => n, 5)
    })
})
