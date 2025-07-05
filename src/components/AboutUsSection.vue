<template>
  <section class="about-us-section" id="about" ref="aboutSectionRef">
  <div class="fade-slide-init" ref="aboutAnimRef">

    <div class="about-container">
      <div class="about-text">
        <div class="about-label">
          About Us <span class="about-label-line"></span>
        </div>
        <h2 class="about-title">World Best Hikking Agency Company Since 2015.</h2>
        <p class="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dsedo eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan ldsdeceus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <router-link class="about-btn" to="/about">Read More</router-link>
      </div>
      <div class="about-images">
        <picture>
          <source srcset="/images/about-images/about-us-1-400w.webp 400w, /images/about-images/about-us-1-800w.webp 800w" type="image/webp" sizes="(max-width: 992px) 40vw, 512px">
          <source srcset="/images/about-images/about-us-1-400w.jpeg 400w, /images/about-images/about-us-1-800w.jpeg 800w" type="image/jpeg" sizes="(max-width: 992px) 40vw, 512px">
          <img src="/images/about-images/about-us-1-400w.jpeg" alt="Hiking in Transylvania" class="about-img about-img-left" loading="lazy" />
        </picture>
        <picture>
          <source srcset="/images/about-images/about-us-2-400w.webp 400w, /images/about-images/about-us-2-800w.webp 800w" type="image/webp" sizes="(max-width: 992px) 40vw, 512px">
          <source srcset="/images/about-images/about-us-2-400w.jpeg 400w, /images/about-images/about-us-2-800w.jpeg 800w" type="image/jpeg" sizes="(max-width: 992px) 40vw, 512px">
          <img src="/images/about-images/about-us-2-400w.jpeg" alt="Discovering nature" class="about-img about-img-right" loading="lazy" />
        </picture>
      </div>
    </div>
    </div>
</section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';


const aboutSectionRef = ref(null);
const aboutAnimRef = ref(null);
let observer = null;

onMounted(() => {
  // Animate about section content (not section) on scroll
  const el = aboutAnimRef.value;
  const triggerAnimation = () => {
    if (el && !el.classList.contains('fade-slide-in')) {
      el.classList.add('fade-slide-in');
    }
  };
  // Check if already visible on mount
  if (el) {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setTimeout(triggerAnimation, 200);
      return;
    }
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        },
        { threshold: window.innerWidth <= 750 ? 0.01 : 0.25 }
      );
      observer.observe(el);
    } else {
      window.addEventListener('scroll', triggerAnimation, { passive: true });
    }
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.about-us-section {
  background: var(--color-background-light-softer-tone);
  padding: 8rem 1.5rem 8rem 1.5rem;
  display: flex;
  justify-content: center;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  width: 100%;
  max-width: 64rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.about-text {
  flex: 1 1 320px;
  text-align: left;
  /* min-width: 340px;
  max-width: 580px; */
}

.about-label {
  font-size: 1.05rem;
  color: var(--color-text-highlight);
  font-weight: 600;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.about-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: var(--color-text-highlight);
  border-radius: 2px;
}

.about-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--color-text-dark);
  margin-bottom: 1.2rem;
}

.about-description {
  font-size: 1.12rem;
  margin-bottom: 2.1rem;
  color: var(--color-text-dark);
  line-height: 1.7;
}

.about-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background: var(--color-text-highlight);
  text-decoration: none;
  color: var(--color-text-dark); 
  font-weight: 700;
  border: none;
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  box-shadow: 0 2px 12px rgba(224,138,30,0.09);
}

.about-btn:hover {
  filter: brightness(1.12);
}

.about-images {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 340px;
}

/* Unified .about-img rules for DRYness */
.about-img {
  width: 220px;
  height: 320px;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.about-img-left {
  position: relative;
  z-index: 2;
  top: -2rem;
}

.about-img-right {
  position: relative;
  z-index: 2;
  top: 2rem;
}

/* Tablet & below: stack content vertically, adjust gaps */
@media (max-width: 900px) {
  .about-us-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .about-container {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 3.5rem 0;
  }

  .about-images {
    flex-direction: row;
    min-width: 0;
    justify-content: center;
    gap: 1.2rem;
  }

  .about-text {
    text-align: left;
    min-width: 0;
    max-width: 100vw;
  }
}
.about-btn {
  background: var(--color-text-highlight);
  color: var(--color-text-dark);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 1.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s;
  line-height: 1.5rem;
}
.about-btn:hover {
  background: var(--color-text-highlight);
  filter: brightness(1.1);
}

/* Mobile: font, full-width images/buttons, aspect ratio */
@media (max-width: 600px) {
  .about-us-section {
    padding: 1.6rem 1.5rem 1.1rem 1.5rem;
  }

  .about-title {
    font-size: 1.6rem;
  }

  .about-description {
    font-size: 1rem;
  }

  .about-img {
    max-width: 400px;
    width: 100%;
    height: auto;
    min-width: 120px;
    aspect-ratio: 5/7;
  }

  .about-btn {
    width: 100%;
    padding: 1rem 2rem;
  }
}
</style>
