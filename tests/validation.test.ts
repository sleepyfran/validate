import Validation from '../src/index'
import { assertMatchObjects, createInput } from './utils'
import createCollectionsValidator from '../src/expressions/collections-validator'
import createDateValidator from '../src/expressions/date-validator'
import createNumberValidator from '../src/expressions/number-validator'
import createObjectValidator from '../src/expressions/object-validator'
import createStringValidator from '../src/expressions/string-validator'
import createAllValidators from '../src/expressions/all-validators'

describe('of', () => {
    describe('correctly returns validator for input type', () => {
        test('for collections', () => {
            const validator = createCollectionsValidator(
                createInput([1, 2, 3]),
                [],
            )
            const propertyValidator = Validation.of([1, 2, 3])

            assertMatchObjects(propertyValidator, validator)
        })

        test('for dates', () => {
            const validator = createDateValidator(createInput(new Date()), [])
            const propertyValidator = Validation.of(new Date())

            assertMatchObjects(propertyValidator, validator)
        })

        test('for numbers', () => {
            const validator = createNumberValidator(createInput(10), [])
            const propertyValidator = Validation.of(10)

            assertMatchObjects(propertyValidator, validator)
        })

        test('for objects', () => {
            const validator = createObjectValidator<any>(
                createInput({ test: 1 }),
                [],
            )
            const propertyValidator = Validation.of({ test: 1 })

            assertMatchObjects(propertyValidator, validator)
        })

        test('for strings', () => {
            const validator = createStringValidator(createInput('test'), [])
            const propertyValidator = Validation.of('test')

            assertMatchObjects(propertyValidator, validator)
        })
    })

    test('returns all validators when input is undefined', () => {
        const allValidators = createAllValidators(createInput(undefined), [])
        const validator = Validation.of(undefined)

        assertMatchObjects(allValidators, validator)
    })
})
