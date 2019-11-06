import createResult from '../src/expressions/result'
import {
    createDummyError,
    createDummyInput,
    dummyError,
    dummyInput,
} from './utils'

describe('combineWith', () => {
    test('combines errors and returns new input', () => {
        const originalInput = createDummyInput('original')
        const otherInput = createDummyInput('other')
        const originalErrors = [createDummyError('original')]
        const otherErrors = [createDummyError('other')]

        const result = createResult(originalInput, originalErrors)
        const otherResult = createResult(otherInput, otherErrors)

        const combined = result.combineWith(otherResult)

        expect(combined.input()).toEqual(otherInput)
        expect(combined.errors()).toStrictEqual([
            ...originalErrors,
            ...otherErrors,
        ])
    })
})

describe('combineWithLeft', () => {
    test('combines errors and returns original input', () => {
        const originalInput = createDummyInput('original')
        const otherInput = createDummyInput('other')
        const originalErrors = [createDummyError('original')]
        const otherErrors = [createDummyError('other')]

        const result = createResult(originalInput, originalErrors)
        const otherResult = createResult(otherInput, otherErrors)

        const combined = result.combineWithLeft(otherResult)

        expect(combined.input()).toEqual(originalInput)
        expect(combined.errors()).toStrictEqual([
            ...originalErrors,
            ...otherErrors,
        ])
    })
})

describe('fold', () => {
    test('calls onError with errors if any validation failed', () => {
        const result = createResult(dummyInput, [dummyError])

        result.fold(
            () => {},
            () => {
                throw "onSuccess shouldn't have been called!"
            },
        )
    })

    test('calls onSuccess with input if no validation failed', () => {
        const result = createResult(dummyInput, [])

        result.fold(
            () => {
                throw "onError shouldn't have been called!"
            },
            input => {
                expect(input).toStrictEqual(dummyInput)
            },
        )
    })
})

describe('hasErrors', () => {
    test('returns true if any validation failed', () => {
        const result = createResult(dummyInput, [dummyError])

        expect(result.hasErrors()).toBeTruthy()
    })

    test('calls onSuccess with input if no validation failed', () => {
        const result = createResult(dummyInput, [])

        expect(result.hasErrors()).toBeFalsy()
    })
})
