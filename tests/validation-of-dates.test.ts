import * as validationOf from '../src/expressions/validations/of'
import validationOfDates from '../src/expressions/validations/dates'
import { assertSteps, assertValidationWithResult } from './utils'

const validationOfSpy = jest.spyOn(validationOf, 'default')

const inputDate = new Date(2019, 10, 24)

describe('after', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if the given date is before the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfDates(inputDate, []).after(d => d, new Date(2019, 10, 23))
    })

    it('should add a failed validation if the given date is after the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).after(d => d, new Date(2019, 10, 25))
    })

    it('should add a failed validation if the given date is the same as the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).after(d => d, new Date(2019, 10, 24))
    })
})

describe('before', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if the given date is after the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfDates(inputDate, []).before(d => d, new Date(2019, 10, 25))
    })

    it('should add a failed validation if the given date is before the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).before(d => d, new Date(2019, 10, 23))
    })

    it('should add a failed validation if the given date is the same as the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).before(d => d, new Date(2019, 10, 24))
    })
})

describe('between', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if the given date is inside the period', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfDates(inputDate, []).between(
            d => d,
            new Date(2019, 10, 23),
            new Date(2019, 10, 25),
        )
    })

    it('should add a failed validation if the given date is outside the period', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).between(
            d => d,
            new Date(2019, 10, 21),
            new Date(2019, 10, 23),
        )
    })

    it('should add a failed validation if the given date is the same as the period start', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).between(
            d => d,
            new Date(2019, 10, 24),
            new Date(2019, 10, 26),
        )
    })

    it('should add a failed validation if the given date is the same as the period end', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).between(
            d => d,
            new Date(2019, 10, 22),
            new Date(2019, 10, 24),
        )
    })
})

describe('same', () => {
    afterEach(() => {
        validationOfSpy.mockClear()
    })

    it('should add a passed validation if the given date is the same as the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(true))

        validationOfDates(inputDate, []).same(d => d, new Date(2019, 10, 24))
    })

    it('should add a passed validation if the given date is not the same as the input', () => {
        assertSteps(validationOfSpy, assertValidationWithResult(false))

        validationOfDates(inputDate, []).same(d => d, new Date(2019, 10, 25))
    })
})
