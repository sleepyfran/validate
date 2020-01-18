import createInfo from '../src/expressions/info'
import * as syntaxModule from '../src/expressions/chain-end'
import { assertSteps, dummyInput } from './utils'
import { ValidationExpression } from '../src/types/step'
import { Severity } from '../src/types/severity'

const syntaxSpy = jest.spyOn(syntaxModule, 'default')

describe('withPropertyName', () => {
    test('returns input if no last step', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(0)
        })

        createInfo(dummyInput, []).withPropertyName('test')
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
        ]).withPropertyName('test')
    })

    test('modifies the property name if the previous expression is a validation', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(1)

            const validationExpression = (steps[0]
                .expression as unknown) as ValidationExpression

            expect(validationExpression.kind).toEqual('validation')
            expect(validationExpression.property).toEqual(
                'evenMoreWonderfulProperty',
            )
        })

        createInfo(dummyInput, [
            {
                expression: {
                    kind: 'validation',
                    message: '',
                    code: '',
                    fulfillsValidation: false,
                    property: 'wonderfulProperty',
                },
            },
        ]).withPropertyName('evenMoreWonderfulProperty')
    })
})

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

describe('withSeverity', () => {
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

    test('adds the provided severity if the previous expression is a validation', () => {
        assertSteps(syntaxSpy, steps => {
            expect(steps).toHaveLength(1)

            const validationExpression = (steps[0]
                .expression as unknown) as ValidationExpression

            expect(validationExpression.kind).toEqual('validation')
            expect(validationExpression.severity).toEqual(Severity.Error)
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
        ]).withSeverity(Severity.Error)
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

    test('adds the provided message if the previous expression is a validation', () => {
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
