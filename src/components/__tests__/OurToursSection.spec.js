import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import OurToursSection from '../OurToursSection.vue';
import TourCard from '../TourCard.vue';

// Mock IntersectionObserver to prevent errors in JSDOM
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

// Mock router for TourCard's <router-link>
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)*', component: {} }],
});

describe('OurToursSection.vue', () => {
  it('renders the section title', () => {
    const wrapper = mount(OurToursSection, {
      global: { plugins: [router] },
    });
    expect(wrapper.find('.tour-title').text()).toBe('Explore Activities');
  });

  it('renders the correct number of TourCard components', () => {
    const wrapper = mount(OurToursSection, {
      global: { plugins: [router] },
    });
    const cards = wrapper.findAllComponents(TourCard);
    expect(cards.length).toBe(3);
  });

  it('passes the correct props to the first TourCard', () => {
    const wrapper = mount(OurToursSection, {
      global: { plugins: [router] },
    });
    const firstCard = wrapper.findComponent(TourCard);
    expect(firstCard.props('title')).toBe('Transylvania');
    expect(firstCard.props('desc')).toBe('Explore breathtaking mountain trails with our expert guides.');
    expect(firstCard.props('price')).toBe('Start from 790 € / person');
  });
});