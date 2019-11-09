import Step from '../types/step'
import createCollectionsValidator from './collections-validator'
import createDateValidator from './date-validator'
import createNumberValidator from './number-validator'
import createObjectValidator from './object-validator'
import createStringValidator from './string-validator'

/**
 * Creates an object with all the available validators. This is used as a
 * workaround for when the input is undefined and we can't actually match it
 * against any of the available validators, which causes the type-matcher to
 * return an object validator even though it doesn't fit the type. Since the
 * user will only have the real options available this will only do anything
 * at runtime.
 */
const createAllValidators = (input: any, steps: Step[]): any => ({
    ...createCollectionsValidator(input, steps),
    ...createDateValidator(input, steps),
    ...createNumberValidator(input, steps),
    ...createObjectValidator(input, steps),
    ...createStringValidator(input, steps),
})

export default createAllValidators
