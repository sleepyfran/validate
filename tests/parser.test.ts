import { parse } from '../src/parser'
import { createDummyValidationExpression, dummyInput } from './utils'

describe('parse', () => {
    describe('validations', () => {
        test('empty steps returns successful result', () => {
            const result = parse(dummyInput, [])
            expect(result.hasErrors()).toBeFalsy()
            expect(result.errors()).toHaveLength(0)
        })

        test('steps with no errors returns successful result', () => {
            const result = parse(dummyInput, [
                {
                    expression: createDummyValidationExpression(true),
                },
                {
                    expression: createDummyValidationExpression(true),
                },
                {
                    expression: createDummyValidationExpression(true),
                },
            ])

            expect(result.hasErrors()).toBeFalsy()
            expect(result.errors()).toHaveLength(0)
        })

        test('steps with initial error returns unsuccessful result', () => {
            const result = parse(dummyInput, [
                {
                    expression: createDummyValidationExpression(false),
                },
                {
                    expression: createDummyValidationExpression(true),
                },
                {
                    expression: createDummyValidationExpression(true),
                },
            ])

            expect(result.hasErrors()).toBeTruthy()
            expect(result.errors()).toHaveLength(1)
        })

        test('steps with error in the middle returns unsuccessful result', () => {
            const result = parse(dummyInput, [
                {
                    expression: createDummyValidationExpression(true),
                },
                {
                    expression: createDummyValidationExpression(false),
                },
                {
                    expression: createDummyValidationExpression(true),
                },
            ])

            expect(result.hasErrors()).toBeTruthy()
            expect(result.errors()).toHaveLength(1)
        })

        test('steps with error in the end returns unsuccessful result', () => {
            const result = parse(dummyInput, [
                {
                    expression: createDummyValidationExpression(true),
                },
                {
                    expression: createDummyValidationExpression(true),
                },
                {
                    expression: createDummyValidationExpression(false),
                },
            ])

            expect(result.hasErrors()).toBeTruthy()
            expect(result.errors()).toHaveLength(1)
        })

        test('steps with all errors returns unsuccessful result', () => {
            const result = parse(dummyInput, [
                {
                    expression: createDummyValidationExpression(false),
                },
                {
                    expression: createDummyValidationExpression(false),
                },
                {
                    expression: createDummyValidationExpression(false),
                },
            ])

            expect(result.hasErrors()).toBeTruthy()
            expect(result.errors()).toHaveLength(3)
        })
    })

    describe('conditions', () => {
        describe('when or unless', () => {
            test('evaluating to true with no errors returns successful result', () => {
                const result = parse(dummyInput, [
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: {
                            kind: 'condition',
                            applyValidations: true,
                        },
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                ])

                expect(result.hasErrors()).toBeFalsy()
                expect(result.errors()).toHaveLength(0)
            })

            test('evaluating to true with errors before condition returns unsuccessful result', () => {
                const result = parse(dummyInput, [
                    {
                        expression: createDummyValidationExpression(false),
                    },
                    {
                        expression: createDummyValidationExpression(false),
                    },
                    {
                        expression: {
                            kind: 'condition',
                            applyValidations: true,
                        },
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                ])

                expect(result.hasErrors()).toBeTruthy()
                expect(result.errors()).toHaveLength(2)
            })

            test('evaluating to true with errors after condition returns unsuccessful result', () => {
                const result = parse(dummyInput, [
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: {
                            kind: 'condition',
                            applyValidations: true,
                        },
                    },
                    {
                        expression: createDummyValidationExpression(false),
                    },
                ])

                expect(result.hasErrors()).toBeTruthy()
                expect(result.errors()).toHaveLength(1)
            })

            test('evaluating to false with no errors returns successful result', () => {
                const result = parse(dummyInput, [
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: {
                            kind: 'condition',
                            applyValidations: false,
                        },
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                ])

                expect(result.hasErrors()).toBeFalsy()
                expect(result.errors()).toHaveLength(0)
            })

            test('evaluating to false with errors before condition returns successful result', () => {
                const result = parse(dummyInput, [
                    {
                        expression: createDummyValidationExpression(false),
                    },
                    {
                        expression: createDummyValidationExpression(false),
                    },
                    {
                        expression: {
                            kind: 'condition',
                            applyValidations: false,
                        },
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                ])

                expect(result.hasErrors()).toBeFalsy()
                expect(result.errors()).toHaveLength(0)
            })

            test('evaluating to false with errors after condition returns unsuccessful result', () => {
                const result = parse(dummyInput, [
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: createDummyValidationExpression(true),
                    },
                    {
                        expression: {
                            kind: 'condition',
                            applyValidations: false,
                        },
                    },
                    {
                        expression: createDummyValidationExpression(false),
                    },
                ])

                expect(result.hasErrors()).toBeTruthy()
                expect(result.errors()).toHaveLength(1)
            })
        })
    })
})
