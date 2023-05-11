import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Layout from '@/components/Layout.vue'

describe('Layout', () => {
  it('renders properly', () => {
    const wrapper = mount(Layout)
    expect(wrapper.text()).toContain('Várkonyi')
  })
})
