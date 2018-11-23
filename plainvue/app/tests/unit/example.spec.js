import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'hello'
    const x = 4
    const y = 9
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg, x, y }
    })
    expect(wrapper.text()).toMatch('13')
  })
})

import {add} from '@/components/calculator'
describe('calculator class', () => {
  it('should add numbers', () => {
    let result = add(1,1)
    expect(result).toBe(3)
  })
})
