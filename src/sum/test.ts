import { expect, test, describe } from 'bun:test'
import { sum } from '.'

describe('sum', () => {
    test('2+2', () => {
        const value = sum(2,2)
        expect(value).toBe(4)
    })
})