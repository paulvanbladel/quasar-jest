import Quasar, * as All from 'quasar'
import {mount, shallowMount, createLocalVue} from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'
import QBUTTON from '@/components/QBtn-demo.vue'
const localVue = createLocalVue()
localVue.use(Quasar, {components: [All]})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('QBUTTON', () => {
  // const localVue = createLocalVue();
  // localVue.use(Quasar, { components: ['QBtn']})
  const wrapper = mount(QBUTTON, {
    localVue
  })
  const vm = wrapper.vm
  // console.log(wrapper)

  it('check QBUTTON is a Vue Instance', () => {
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

