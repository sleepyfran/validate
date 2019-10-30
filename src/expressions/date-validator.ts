import Step from '../types/step'
import DateValidator from '../types/expressions/date-validator'
import createSyntax from '../syntax'

const createDateValidator = (input: Date, steps: Step[]): DateValidator => ({
    after(date: Date) {
        return createSyntax(createDateValidator, input, steps)
    },

    before(date: Date) {
        return createSyntax(createDateValidator, input, steps)
    },

    between(pastDate: Date, futureDate: Date) {
        return createSyntax(createDateValidator, input, steps)
    },

    same(date: Date) {
        return createSyntax(createDateValidator, input, steps)
    },
})

export default createDateValidator
