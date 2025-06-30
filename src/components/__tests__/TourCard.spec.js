import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import TourCard from '../TourCard.vue'

// Mock router setup
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)*', component: {} }],
})

const defaultProps = {
  title: 'Test Tour',
  desc: 'A great tour.',
  durationValue: '3',
  durationLabel: 'Days',
  price: '€100 /person',
  image: 'test-image.jpg',
}

describe('TourCard.vue', () => {
  it('renders all props correctly', () => {
    const wrapper = mount(TourCard, {
      props: defaultProps,
      global: { plugins: [router] },
    })

    expect(wrapper.find('.tour-name').text()).toBe('Test Tour')
    expect(wrapper.find('.tour-desc').text()).toBe('A great tour.')
    expect(wrapper.find('.days-number').text()).toBe('3')
    expect(wrapper.find('.days-label').text()).toBe('Days')
    expect(wrapper.find('.tour-img').attributes('src')).toBe('test-image.jpg')
  })

  it('formats the price correctly with "/person"', () => {
    const wrapper = mount(TourCard, {
      props: defaultProps,
      global: { plugins: [router] },
    })
    expect(wrapper.find('.tour-price').text()).toContain('€100')
    expect(wrapper.find('.per-person').text()).toBe('/person')
  })

  it('generates the correct link for a standard title', () => {
    const wrapper = mount(TourCard, {
      props: defaultProps,
      global: { plugins: [router] },
    })
    expect(wrapper.findComponent({ name: 'RouterLink' }).props().to).toBe('/tour/test-tour')
  })

  it('generates the correct special link for "Transylvania"', () => {
    const wrapper = mount(TourCard, {
      props: { ...defaultProps, title: 'Transylvania' },
      global: { plugins: [router] },
    })
    expect(wrapper.findComponent({ name: 'RouterLink' }).props().to).toBe('/tour/transylvania')
  })
})
