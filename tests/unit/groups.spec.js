import { shallowMount } from '@vue/test-utils'
import Groups from '@/components/Groups.vue'

describe('Groups.vue', () => {
  it('renders props.people when passed', () => {
    const people = []
    const wrapper = shallowMount(Groups, {
      propsData: { people }
    })
    expect(wrapper.props('people')).toEqual([])
  })
})
