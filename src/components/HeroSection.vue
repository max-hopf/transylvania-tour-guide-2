<template>
  <section id="hero" class="hero-section">
    <HeaderNavBar />
    <picture class="hero-background parallax-hero-bg">
      <source
        type="image/webp" 
        :srcset="webpSrcset"
        sizes="100vw"
        class="parallax-hero-bg"
      />
      <source 
        type="image/jpeg" 
        :srcset="jpegSrcset"
        sizes="100vw"
        class="parallax-hero-bg"
      />
      <img
        :src="fallbackSrc"
        alt="A scenic view of the Transylvanian landscape at dusk."
        class="parallax-hero-bg hero-background-img"
      />
    </picture>
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
import { ref, onMounted, computed } from 'vue'
import HeaderNavBar from './HeaderNavBar.vue';

// --- Hero Image Configuration ---
const heroImageSizes = [640, 1024, 1280, 1920];
const heroImageBaseName = 'hero-img';
const heroImageDir = '/images/hero-img/';

const generateSrcset = (format) => {
  return heroImageSizes
    .map(size => `${heroImageDir}${heroImageBaseName}-${size}w.${format} ${size}w`)
    .join(', ');
};

const webpSrcset = computed(() => generateSrcset('webp'));
const jpegSrcset = computed(() => generateSrcset('jpeg'));
const fallbackSrc = computed(() => `${heroImageDir}${heroImageBaseName}-1280w.jpeg`);
// --- End Hero Image Configuration ---

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
  left: 0;
  right: 0;
  height: auto; /* Allow height to grow based on content */
  min-height: max(100vh, 32rem); /* Use max() to ensure a minimum height of 600px */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 2rem 1rem; /* Optimized padding for smaller screens */
  box-sizing: border-box;
}

.hero-background-img {
  width: 100%;
  height: 100%;
  /* This is the key fix: it makes the image cover the area without stretching */
  object-fit: cover;
}

.hero-content {  
  color: var(--color-text-light);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw + 1rem, 4rem);
  font-weight: bold;
  color: var(--color-text-light);
  text-shadow:
    0 1px 6px rgba(0, 0, 0, 1),
    0 1px 12px rgba(0, 0, 0, 1);
  margin: 0;
  word-break: break-word;
}

.hero-top-text {
  font-size: clamp(1.2rem, 2.5vw + 0.5rem, 1.8rem);
  font-weight: 600;
  color: var(--color-text-light);
  letter-spacing: 0.04em;
  text-shadow:
    0 1px 6px rgba(0, 0, 0, 1),
    0 1px 12px rgba(0, 0, 0, 1);
  margin: 0;
}

.hero-phone-number-text {
  color: var(--color-text-dark-strong);
  font-weight: 600;
}

.cta-btn {
  display: flex;
  background: var(--color-background-highlight);
  color: var(--color-text-dark-strong);
  font-weight: 600;
  border: none;
  border-radius: 5rem;
  padding: 0.75rem 1.75rem;
  font-size: clamp(1.1rem, 2vw + 0.5rem, 1.2rem);
  cursor: pointer;
  transition: filter 0.2s;
  justify-content: center;
  align-items: center;
  gap: 0.75em;
}

.lucide-phone-call-icon {
  width: 1.2em;
  height: 1.2em;
}

.cta-btn:hover {
  filter: brightness(1.12);
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
