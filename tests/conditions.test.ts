import createConditions from '../src/expressions/conditions'
import * as chainEndModule from '../src/expressions/chain-end'
import { assertConditionWithResult, assertSteps, dummyInput } from './utils'

const chainEndSpy = jest.spyOn(chainEndModule, 'default')

describe('when', () => {
    test('adds true when condition is met', () => {
        assertSteps(chainEndSpy, assertConditionWithResult(true))
        createConditions(dummyInput, []).when(() => true)
    })

    test('adds false when condition is not met', () => {
        assertSteps(chainEndSpy, assertConditionWithResult(false))
        createConditions(dummyInput, []).when(() => false)
    })
})

describe('unless', () => {
    test('adds true when condition is not met', () => {
        assertSteps(chainEndSpy, assertConditionWithResult(false))
        createConditions(dummyInput, []).unless(() => true)
    })

    test('adds false when condition is met', () => {
        assertSteps(chainEndSpy, assertConditionWithResult(true))
        createConditions(dummyInput, []).unless(() => false)
    })
})
