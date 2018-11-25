/* eslint-disable no-undef */
import { add } from '../../src/core/first'
describe('first', () => {
  it('should return 2', () => {
    let result = add(2, 2)
    expect(result).toBe(4)
  })
})
