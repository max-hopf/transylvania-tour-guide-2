<template>
  <section class="hero-section" id="hero">
    <!-- <HeaderNavBar /> -->
    <div class="parallax-hero-bg" :style="{ backgroundImage: `url(${heroImageUrl})` }"></div>
    <!-- <div class="hero-overlay"> -->
    <div class="hero-content">
      <h1
        :class="[
          'hero-title',
          {
            'fade-in-scale': showTitle && !animationDisabled,
            'instant-visible': animationDisabled,
          },
        ]"
      >
        Welcome to Transylvania!
      </h1>
      <div
        :class="[
          'hero-top-text',
          {
            'fade-in-scale': showTopText && !animationDisabled,
            'instant-visible': animationDisabled,
          },
        ]"
      >
        The Land of Friendly Ghouls
      </div>
      <div
        :class="[
          'hero-phone-number',
          'cta-btn',
          { 'fade-in-scale': showCTA && !animationDisabled, 'instant-visible': animationDisabled },
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone-call-icon lucide-phone-call"
        >
          <path d="M13 2a9 9 0 0 1 9 9" />
          <path d="M13 6a5 5 0 0 1 5 5" />
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
        <span class="hero-phone-number-text">+40-740-364-842</span>
      </div>
    </div>
    <!-- </div> -->
    <!-- <SocialMediaButtons /> -->
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import heroImageUrl from '../assets/hero-img.jpg'
// import SocialMediaButtons from './SocialMediaButtons.vue';
// import { images as heroImages } from './heroImages.js';
// import HeaderNavBar from './HeaderNavBar.vue';

const showTitle = ref(false)
const showTopText = ref(false)
const showCTA = ref(false)
const animationDisabled = ref(false)

onMounted(() => {
  if (localStorage.getItem('heroAnimated')) {
    animationDisabled.value = true
    showTitle.value = true
    showTopText.value = true
    showCTA.value = true
  } else {
    setTimeout(() => {
      setTimeout(() => {
        showTitle.value = true
        setTimeout(() => {
          showTopText.value = true
          setTimeout(() => {
            showCTA.value = true
            localStorage.setItem('heroAnimated', 'true')
          }, 2000) // Delay for cta-btn
        }, 1200) // Delay for top text
      }, 600) // Initial delay before animation starts
    }, 0)
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  /* width: 100vw;
  min-width: 100vw; */
  left: 0;
  right: 0;
  height: 100vh;
  min-height: 32rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Prevent content from being hidden behind mobile browser chrome */
  min-height: 100svh;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--color-text-light);
  text-shadow:
    0 1px 6px rgba(0, 0, 0, 1),
    0 1px 12px rgba(0, 0, 0, 1);
  margin-bottom: 1rem;
}
.hero-top-text {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
  color: var(--color-text-light);
  letter-spacing: 0.04em;
  text-shadow:
    0 1px 6px rgba(0, 0, 0, 1),
    0 1px 12px rgba(0, 0, 0, 1);
}
.hero-phone-number {
}
.hero-phone-number-text {
  color: var(--color-text-dark-strong);
  font-weight: 600;
}
.hero-content {
  color: var(--color-text-light);
  text-align: center;
  z-index: 3;
  /* width: 48rem; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);
}
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.cta-btn {
  display: flex;
  background: var(--color-background-highlight);
  color: var(--color-text-dark-strong);
  font-weight: 600;
  border: none;
  border-radius: 1.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.lucide-phone-call-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.cta-btn:hover {
  /* background: #d1770e; */
  filter: brightness(1.12);
}

.cta-btn svg {
  /* Use drop-shadow for SVG icons */
  /* filter: drop-shadow(0 1px 6px rgba(0, 0, 0, 1)); */
}


/* .cta-btn.secondary {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  border: 1.5px solid #fff;
} */

@media (max-width: 900px) {
  /* .hero-section {
    height: auto;
    min-height: 80vh;
    padding-top: 56px;
    padding-bottom: 16px;
    box-sizing: border-box;
  }

  .hero-overlay {
    min-height: 80vh;
    height: auto;
    left: 0;
    right: 0;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 0.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-content {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.5rem 0.5rem;
  } */
  /* .hero-title {
    font-size: 2.6rem;
  }
  .hero-subtitle {
    font-size: 1.3rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  } */
  /* .cta-btn {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    border-radius: 32px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  } */
}
@media (max-width: 600px) {
  /* .hero-section {
    min-height: 100svh;
    height: 100svh;
    padding-top: 56px;
    padding-bottom: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-overlay {
    min-height: 100svh;
    height: 100svh;
    left: 0;
    right: 0;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 0.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-content {
    margin-top: 2.5rem;
    padding: 0.5rem 0.5rem;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  .hero-top-text {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.1rem;
    color: #fff;
    letter-spacing: 0.04em;
    text-shadow:
      0 1px 6px rgba(0, 0, 0, 1),
      0 1px 12px rgba(0, 0, 0, 1);
  }
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .cta-btn {
    width: 90%;
    font-size: 1rem;
    padding: 1rem 0;
    border-radius: 32px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  } */
}

/* @media (max-height: 600px) {
  .hero-content {
    min-height: 600px;
    margin: 0;
    display: flex;
  }
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-phone-number {
    align-self: center;
  }
} */
.fade-in-scale {
  opacity: 1 !important;
  transform: scale(1) !important;
  transition:
    opacity 2s cubic-bezier(0.4, 0, 0.2, 1),
    transform 2s cubic-bezier(0.4, 0, 0.2, 1);
}
.instant-visible {
  opacity: 1 !important;
  transform: scale(1) !important;
  transition: none !important;
}
.hero-title,
.hero-top-text,
.hero-phone-number.cta-btn {
  opacity: 0;
  transform: scale(0.8);
  transition:
    opacity 2s cubic-bezier(0.4, 0, 0.2, 1),
    transform 2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
