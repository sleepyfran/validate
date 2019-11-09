import Validation from '../src/index'
import { assertMatchObjects } from './utils'

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
})
