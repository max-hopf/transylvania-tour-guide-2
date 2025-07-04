<template>
  <transition name="fade">
    <button
      v-if="visible"
      class="back-to-top-btn"
      @click="scrollToTop"
      aria-label="Back to top"
    >
    <!-- <button class="back-to-top-btn" @click="scrollToTop" aria-label="Back to top"> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

function handleScroll() {
  // Check all possible scroll positions for maximum compatibility
  const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // console.log('ScrollY:', scrollY);
  visible.value = scrollY > 120;
}

function scrollToTop() {
  // Try scrolling all possible containers
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.scrollTo({ top: 0, behavior: 'smooth' });
  // If you have a custom container, add it here as well
  // const el = document.querySelector('.main-content');
  // if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.back-to-top-btn svg {
  width: 2.5rem;
  height: 2.5rem;
}

.back-to-top-btn {
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: #ffa800;
  color: #000000;
  box-shadow: 0 4px 24px rgba(0,0,0,0.14);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3000;
  transition: background 0.18s, box-shadow 0.18s, opacity 0.3s;
  opacity: 0.92;
}

/* Apply hover effects only on devices that can hover (e.g., mouse) */
@media (hover: hover) {
  .back-to-top-btn:hover {
    background: #ffe0b2;
    box-shadow: 0 6px 32px rgba(224,138,30,0.13);
    color: #b37700;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.45s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Styles for touch devices (coarse pointer) - larger button */
@media (pointer: coarse) {
  .back-to-top-btn {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .back-to-top-btn svg {
    width: 2.5rem;
    height: 2.5rem;
  }
}

/* Positioning for tablet sizes */
@media (max-width: 900px) {
  .back-to-top-btn {
    right: 1rem;
    bottom: 3rem;
  }
}

/* Overrides for small mobile screens */
@media (max-width: 480px) {
  .back-to-top-btn {
    right: 1rem;
    bottom: 1rem;
  }
  .back-to-top-btn svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>
