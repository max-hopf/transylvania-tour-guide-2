<template>
  <!-- ... -->
  <!-- <div class="parallax-hero-bg" :style="{ backgroundImage: `url(${heroImages[0].fallback})` }"></div> -->
  <section class="activities-section" id="activities" ref="activitiesSectionRef">
    <div class="fade-slide-init" ref="activitiesAnimRef">
      <!-- ... -->
      <!-- <h2 class="activities-title">Our Activities</h2> -->
      <div class="tour-label">Our Activities <span class="tour-label-line"></span></div>
      <h2 class="tour-title">Explore Activities</h2>

      <div class="activities-grid">
        <TourCard
          v-for="tour in activities"
          :key="tour.title"
          :title="tour.title"
          :desc="tour.desc"
          :durationValue="tour.durationValue"
          :durationLabel="tour.durationLabel"
          :price="tour.price"
          :image="tour.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TourCard from './TourCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activities = [
  {
    title: 'Transylvania',
    desc: 'Explore a land of castles, legends, and unspoiled mountain beauty.',
    durationValue: 3,
    durationLabel: 'days',
    price: 'Start from 790 € / person',
    image: 'transylvania',
  },
  {
    title: 'Maramures',
    desc: 'Step into a living museum of traditions, villages, and timeless landscapes.',
    durationValue: 3,
    durationLabel: 'days',
    price: 'Start from 590 € / person',
    image: 'maramures',
  },
  {
    title: 'Bucovina',
    desc: 'Uncover the charm of painted monasteries and timeless countryside traditions.',
    durationValue: 3,
    durationLabel: 'days',
    price: 'Start from 590 € / person',
    image: 'bucovina',
  },
  {
    title: 'Maramures and Bucovina',
    desc: 'Embrace the spirit of Romania through vibrant villages and sacred art.',
    durationValue: 5,
    durationLabel: 'days',
    price: 'Start from 1190 € / person',
    image: 'maramures-bucovina',
  },
  {
    title: 'Cycling Maramures',
    desc: 'Pedal through rolling hills, wooden villages, and breathtaking landscapes.',
    durationValue: 8,
    durationLabel: 'hours',
    price: 'Start from 125 € / person',
    image: 'cycling',
  },
  {
    title: 'Bespoke Tour',
    desc: 'Create a journey that reflects your passions, pace, and personal story.',
    durationValue: '',
    durationLabel: '',
    price: 'Tailored pricing',
    image: 'bespoke',
  },
]
const activitiesSectionRef = ref(null)
const activitiesAnimRef = ref(null)
let observer = null

onMounted(() => {
  // Animate activities section content (not section) on scroll
  const el = activitiesAnimRef.value
  const triggerAnimation = () => {
    if (el && !el.classList.contains('fade-slide-in')) {
      el.classList.add('fade-slide-in')
    }
  }
  // Check if already visible on mount
  if (el) {
    const rect = el.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (inView) {
      setTimeout(triggerAnimation, 200)
      return
    }
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            triggerAnimation()
            observer.disconnect()
          }
        },
        { threshold: window.innerWidth <= 750 ? 0.01 : 0.25 },
      )
      observer.observe(el)
    } else {
      window.addEventListener('scroll', triggerAnimation, { passive: true })
    }
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-')
}
</script>

<style scoped>
.activities-section {
  background: transparent;
  padding: 8rem 1rem 8rem 1rem;
  text-align: center;
  scroll-margin-top: -4rem;
}
.activities-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
}
.tour-label {
  font-size: 1.25rem;
  color: var(--color-text-highlight, #e08a1e);
  font-weight: 600;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
}
.tour-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: var(--color-text-highlight, #e08a1e);
  border-radius: 2px;
}
.tour-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--color-text-dark);
  text-shadow:
    0 1px 3px rgba(255, 255, 255, 0.85),
    0 1px 12px rgba(255, 255, 255, 0.75);
  margin-bottom: 3rem;
  margin-top: 0;
}
@media (max-width: 900px) {
  .activities-grid {
    gap: 1rem;
  }
  .activities-section {
    padding: 4rem 1rem 4rem 1rem;
    scroll-margin-top: -2rem;
  }
}
@media (max-width: 600px) {
  .activities-grid {
    gap: 0.7rem;
  }
  .tour-title {
    font-size: 1.6rem;
  }
}
</style>
