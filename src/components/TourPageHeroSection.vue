
<template>
  <section class="activity-details-hero-section">
    <picture class="hero-background">
      <source :srcset="webpSrcset" type="image/webp" />
      <source :srcset="jpegSrcset" type="image/jpeg" />
      <img :src="fallbackSrc" alt="" />
    </picture>
    <HeaderNavBar />
    <div class="activity-details-container">
      <h1 class="activity-details-title">{{ title }}</h1>
      <p class="activity-details-description">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';

import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageName: { type: String, required: true },
});

const createSrcset = (format) => {
  return [640, 1024, 1280, 1920]
    .map(size => `/images/tour-page-hero-images/${props.imageName}-${size}w.${format} ${size}w`)
    .join(', ');
};

const webpSrcset = computed(() => createSrcset('webp'));
const jpegSrcset = computed(() => createSrcset('jpeg'));
const fallbackSrc = computed(() => `/images/tour-page-hero-images/${props.imageName}-640w.jpeg`);
</script>

<style scoped>
.activity-details-hero-section {
  position: relative;
  overflow: hidden;
  height: 34rem; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-background img,
.hero-background source {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.activity-details-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1; 
}
.activity-details-container,
.activity-details-hero-section > *:not(style):not(.activity-details-hero-section)::before {
  position: relative;
  z-index: 1;
}

.activity-details-container {
  /* max-width: 800px; */
  margin: auto;
  background: transparent;
  text-align: left;
  padding: 2.5rem 2rem 2rem 2rem;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.activity-details-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
} 
.activity-details-title {
  font-size: clamp(2.3rem, 5vw, 2.6rem);
  font-weight: 600;
  color:rgb(255, 255, 255);
  margin-bottom: 1.5rem;
  text-align: center;
  word-break: break-word;
}
.activity-details-description {
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
}

.header-navbar {
  position: relative;
  top: 0;
  background-color:rgba(15, 15, 15, 0.5);
}

:deep(.site-title),
:deep(.nav-menu a),
:deep(.site-title) {
  color: #fff !important;
}

:deep(.hamburger-menu svg) {
  color: var(--color-text-light) !important;
  stroke: var(--color-text-light) !important;
}

/* When menu is open, make the X icon black */
:deep(.hamburger-menu[aria-expanded="true"] svg:last-of-type) {
  color: var(--color-text-dark) !important;
  stroke: var(--color-text-dark) !important;
}

:deep(.nav-menu a:hover) {
    color: var(--color-text-highlight) !important;
}

</style>