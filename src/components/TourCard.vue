<template>
  <router-link class="tour-card" :to="tourLink" style="text-decoration: none; color: inherit">
    <div class="tour-img-wrapper">
            <picture>
        <source :srcset="webpSrcset" type="image/webp" :sizes="imageSizes" />
        <source :srcset="jpegSrcset" type="image/jpeg" :sizes="imageSizes" />
        <img :src="fallbackSrc" :alt="title" class="tour-img" loading="lazy" />
      </picture>
      <div class="tour-days-badge">
        <span class="days-number">{{ durationValue }}</span>
        <span class="days-label">{{ durationLabel }}</span>
      </div>
    </div>
    <div class="tour-info">
      <div class="tour-price">
        <span v-if="price && price.includes('/person')">
          {{ price.split('/person')[0] }}<span class="per-person">/person</span>
        </span>
        <span v-else>
          {{ price }}
        </span>
      </div>
      <h3 class="tour-name">{{ title }}</h3>
      <p class="tour-desc">{{ desc }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const imageSizes = '(max-width: 400px) 100vw, 23rem'

const props = defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  durationValue: { type: [String, Number], required: true },
  durationLabel: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
})

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-')
}

const webpSrcset = computed(() => {
  return `/images/tour-card-images/${props.image}-240w.webp 240w, /images/tour-card-images/${props.image}-480w.webp 480w, /images/tour-card-images/${props.image}-800w.webp 800w`
})

const jpegSrcset = computed(() => {
  return `/images/tour-card-images/${props.image}-240w.jpeg 240w, /images/tour-card-images/${props.image}-480w.jpeg 480w, /images/tour-card-images/${props.image}-800w.jpeg 800w`
})

const fallbackSrc = computed(() => {
  return `/images/tour-card-images/${props.image}-480w.jpeg`
})

const tourLink = computed(() => {
  const title = props.title.toLowerCase()
  if (title === 'transylvania') return '/tour/transylvania'
  if (title === 'maramures') return '/tour/maramures'
  if (title === 'bucovina') return '/tour/bucovina'
  return `/tour/${slugify(props.title)}`
})
</script>

<style scoped>
.tour-card {
  background: var(--color-background-light);
  border-radius: 1rem;
  box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.07);
  border: 2.5px solid var(--color-border-light-soft);
  max-width: 23rem;
  min-width: 240px;
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.2rem 0.2rem 0 0.2rem;
}
.tour-card:hover {
  transform: scale(1.01);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}
.tour-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 1rem;
  border: 4px solid #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  background: #fff;
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.tour-img-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  /* fallback for browsers that do not support aspect-ratio */
  height: 0;
  padding-bottom: 100%;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  /* border removed to fix aspect ratio */
}
.tour-info {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}
.tour-price {
  padding: 0 0.5rem;
  margin-bottom: 0.25rem;
  text-align: left;
  padding-right: 6rem;
  line-height: 1.3rem;
}
.per-person {
  font-size: 1.125rem;
  color: var(--color-text-dark);
  font-weight: 400;
  margin-left: 2px;
}
.tour-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-dark);
  text-align: left;
  padding-left: 0.5rem;
}
.tour-desc {
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: var(--color-text-dark);
  text-align: left;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.tour-days-badge {
  position: absolute;
  bottom: -2.25rem;
  right: 1.5rem;
  background: var(--color-background-light);
  border: 3px solid var(--color-border-light-soft);
  outline: 4px solid var(--color-background-light);
  color: var(--color-text-dark);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07); */
  z-index: 1;
}
.days-number {
  font-size: 1.4rem;
  line-height: 1;
}
.days-label {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-dark);
  margin-top: -2px;
}
</style>
