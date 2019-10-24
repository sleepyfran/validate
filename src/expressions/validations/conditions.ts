import Step from '../../types/step'
import Conditions from '../../types/validations/conditions'
import ChainEnd from '../../types/validations/chain-end'
import validationEnd from './chain-end'

export default <T>(input: T, validationSteps: Step[]): Conditions<T> => ({
    when(condition: (input: T) => boolean): ChainEnd<T> {
        return validationEnd(input, validationSteps)
    },

    unless(condition: (input: T) => boolean): ChainEnd<T> {
        return validationEnd(input, validationSteps)
    },
})
