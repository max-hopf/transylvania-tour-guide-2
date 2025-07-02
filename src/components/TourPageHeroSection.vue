
<template>
  <section
    class="activity-details-hero-section"
    :style="{ '--hero-bg-image': `url('${backgroundImage}')` }"
  >
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

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  backgroundImage: { type: String, required: true }
});
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
.activity-details-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--hero-bg-image);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6) blur(0px);
  z-index: 0;
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