import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import TabbedInterface from '../TabbedInterface.vue';

const mockTabs = [
  { label: 'Tab 1', content: 'Content for Tab 1' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
  { label: 'Tab 3', content: 'Content for Tab 3' },
];

// Mock window.matchMedia
const createMatchMedia = (matches) => vi.fn().mockImplementation(query => ({
  matches: matches,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

describe('TabbedInterface.vue', () => {
  let wrapper;

  const mountComponent = (isMobile) => {
    window.matchMedia = createMatchMedia(isMobile);
    // Attach to body to ensure getElementById works in the JSDOM environment
    return mount(TabbedInterface, {
      props: { tabs: mockTabs },
      attachTo: document.body,
    });
  };

  describe('Desktop View', () => {
    beforeEach(() => {
      wrapper = mountComponent(false);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders the correct number of tabs', () => {
      const tabs = wrapper.findAll('.tab');
      expect(tabs.length).toBe(mockTabs.length);
    });

    it('displays the first tab as active by default', () => {
      const firstTab = wrapper.find('.tab');
      expect(firstTab.classes()).toContain('active');
      const content = wrapper.find('.tab-content');
      expect(content.text()).toContain('Content for Tab 1');
    });

    it('switches to the correct tab when clicked', async () => {
      const secondTab = wrapper.findAll('.tab')[1];
      await secondTab.trigger('click');
      expect(secondTab.classes()).toContain('active');
      const content = wrapper.find('.tab-content');
      expect(content.text()).toContain('Content for Tab 2');
    });
  });

  describe('Mobile View (Accordion)', () => {
    beforeEach(() => {
      wrapper = mountComponent(true);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders as an accordion on mobile', () => {
      const accordionHeaders = wrapper.findAll('.accordion-header');
      expect(accordionHeaders.length).toBe(mockTabs.length);
      expect(wrapper.find('.tabs').exists()).toBe(false);
    });

    it('displays the first accordion item as active by default', () => {
      expect(wrapper.find('.accordion-header').classes()).toContain('active');
      expect(wrapper.find('.accordion-content').text()).toContain('Content for Tab 1');
    });

    it('toggles accordion items on click', async () => {
      const secondHeader = wrapper.findAll('.accordion-header')[1];
      await secondHeader.trigger('click');
      await wrapper.vm.$nextTick();

      // After clicking the second header, it should become active
      expect(wrapper.findAll('.accordion-header')[1].classes()).toContain('active');
      const secondContent = wrapper.findAll('.accordion-content')[1];
      expect(secondContent.text()).toContain('Content for Tab 2');

      // The first header should now be inactive
      expect(wrapper.find('.accordion-header').classes()).not.toContain('active');

      // Click the second header again to close it
      await secondHeader.trigger('click');
      await wrapper.vm.$nextTick();
      expect(wrapper.findAll('.accordion-header')[1].classes()).not.toContain('active');
    });
  });
});
