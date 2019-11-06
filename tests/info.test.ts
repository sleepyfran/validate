import createInfo from '../src/expressions/info'
import * as syntaxModule from '../src/expressions/chain-end'
import { assertSteps, dummyInput } from './utils'
import { ValidationExpression } from '../src/types/step'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

describe('withCode', () => {
    test('returns input if no last step', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(0)
        })

        createInfo(dummyInput, []).withCode(100)
    })

    test('returns input if no validation expressions are found', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(1)
            expect(steps[0].expression.kind).toEqual('condition')
        })

        createInfo(dummyInput, [
            {
                expression: {
                    kind: 'condition',
                    applyValidations: false,
                },
            },
        ]).withCode(100)
    })

    test('adds the provided code if the previous expression is a validation', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(1)

            const validationExpression = (steps[0]
                .expression as unknown) as ValidationExpression

            expect(validationExpression.kind).toEqual('validation')
            expect(validationExpression.code).toEqual(100)
        })

        createInfo(dummyInput, [
            {
                expression: {
                    kind: 'validation',
                    message: '',
                    code: '',
                    fulfillsValidation: false,
                    property: 'test',
                },
            },
        ]).withCode(100)
    })
})

describe('withMessage', () => {
    test('returns input if no last step', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(0)
        })

        createInfo(dummyInput, []).withMessage('test')
    })

    test('returns input if no validation expressions are found', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(1)
            expect(steps[0].expression.kind).toEqual('condition')
        })

        createInfo(dummyInput, [
            {
                expression: {
                    kind: 'condition',
                    applyValidations: false,
                },
            },
        ]).withMessage('test')
    })

    test('adds the provided code if the previous expression is a validation', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(1)

            const validationExpression = (steps[0]
                .expression as unknown) as ValidationExpression

            expect(validationExpression.kind).toEqual('validation')
            expect(validationExpression.message).toEqual('test')
        })

        createInfo(dummyInput, [
            {
                expression: {
                    kind: 'validation',
                    message: '',
                    code: '',
                    fulfillsValidation: false,
                    property: 'test',
                },
            },
        ]).withMessage('test')
    })
})
