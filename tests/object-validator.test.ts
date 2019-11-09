import Validation from '../src/index'
import { assertMatchObjects, createInput } from './utils'
import createAllValidators from '../src/expressions/all-validators'

describe('property', () => {
    describe('correctly returns validator for input type', () => {
        test('for collections', () => {
            const collectionsValidator = Validation.of([1, 2, 3])
            const propertyValidator = Validation.of({
                key: [1, 2, 3],
            }).property('key')

            assertMatchObjects(propertyValidator, collectionsValidator)
        })

        test('for dates', () => {
            const datesValidator = Validation.of(new Date())
            const propertyValidator = Validation.of({
                key: new Date(),
            }).property('key')

            assertMatchObjects(propertyValidator, datesValidator)
        })

        test('for numbers', () => {
            const datesValidator = Validation.of(10)
            const propertyValidator = Validation.of({
                key: 10,
            }).property('key')

            assertMatchObjects(propertyValidator, datesValidator)
        })

        test('for objects', () => {
            const datesValidator = Validation.of({ test: 1 })
            const propertyValidator = Validation.of({
                key: { test: 1 },
            }).property('key')

            assertMatchObjects(propertyValidator, datesValidator)
        })

        test('for strings', () => {
            const stringValidator = Validation.of('test')
            const propertyValidator = Validation.of({ key: 'test' }).property(
                'key',
            )

            assertMatchObjects(propertyValidator, stringValidator)
        })
    })

    describe('correctly returns validator for undefined input type', () => {
        test('for collections', () => {
            const collectionsValidator = Validation.of(
                (undefined as unknown) as any[],
            )
            const propertyValidator = Validation.of({
                key: [1, 2, 3],
            }).property('key')

            assertMatchObjects(propertyValidator, collectionsValidator)
        })

        test('for dates', () => {
            const datesValidator = Validation.of((undefined as unknown) as Date)
            const propertyValidator = Validation.of({
                key: new Date(),
            }).property('key')

            assertMatchObjects(propertyValidator, datesValidator)
        })

        test('for numbers', () => {
            const datesValidator = Validation.of(
                (undefined as unknown) as number,
            )
            const propertyValidator = Validation.of({
                key: 10,
            }).property('key')

            assertMatchObjects(propertyValidator, datesValidator)
        })

        test('for objects', () => {
            const datesValidator = Validation.of((undefined as unknown) as {})
            const propertyValidator = Validation.of({
                key: { test: 1 },
            }).property('key')

            assertMatchObjects(propertyValidator, datesValidator)
        })

        test('for strings', () => {
            const stringValidator = Validation.of(
                (undefined as unknown) as string,
            )
            const propertyValidator = Validation.of({ key: 'test' }).property(
                'key',
            )

            assertMatchObjects(propertyValidator, stringValidator)
        })
    })

    test('returns all validators when input is optional (undefined)', () => {
        const allValidators = createAllValidators(createInput(undefined), [])
        const validator = Validation.of({ key: undefined }).property('key')

        assertMatchObjects(allValidators, validator)
    })
})
