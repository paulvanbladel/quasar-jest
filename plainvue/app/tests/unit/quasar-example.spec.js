import Quasar, * as All from 'quasar'
import {mount, createLocalVue } from '@vue/test-utils'
import QBUTTON from '../../src/components/QBtn-demo.vue'
const localVue = createLocalVue()
localVue.use(Quasar, {components: [All]})



describe('Render, build and wire up a quasar component', () => {
  // const localVue = createLocalVue();
  // localVue.use(Quasar, { components: ['QBtn']})
  const wrapper = mount(QBUTTON, {
    localVue
  })
  const vm = wrapper.vm
  // console.log(wrapper)

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('has a created hook', () => {
    expect(typeof vm.increment).toBe('function')
  })

  it('sets the correct default data', () => {
    expect(typeof vm.counter).toBe('number')
    const defaultData = QBUTTON.data()
    expect(defaultData.counter).toBe(0)
  })

  it('correctly updates data when button is pressed', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(vm.counter).toBe(1)
  })
})

