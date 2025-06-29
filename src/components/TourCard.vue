<template>
  <router-link
    class="tour-card"
    :to="tourLink"
    style="text-decoration: none; color: inherit;"
  >
    <div class="tour-days-badge">
      <span class="days-number">{{ durationValue }}</span>
      <span class="days-label">{{ durationLabel }}</span>
    </div>
    <div class="tour-img-wrapper">
      <img
        :src="image"
        :alt="title"
        class="tour-img"
        loading="lazy"
      />
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
import { computed } from 'vue';
const props = defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  durationValue: { type: [String, Number], required: true },
  durationLabel: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: [String, Object], required: true },
});

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

const tourLink = computed(() => {
  const title = props.title.toLowerCase();
  if (title === 'transylvania') return '/tour/transylvania';
  if (title === 'maramures') return '/tour/maramures';
  if (title === 'bucovina') return '/tour/bucovina';
  return `/tour/${slugify(props.title)}`;
});
</script>

<style scoped>
.tour-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  max-width: 350px;
  min-width: 270px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.18s, box-shadow 0.18s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.tour-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.tour-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  /* border-top-left-radius: 18px;
  border-top-right-radius: 18px; */
}
.tour-info {
  padding: 0 0.5rem;
  text-align: left;
}
.tour-price {
  font-size: 1.125rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 0.5rem;
}
.per-person {
  font-size: 0.875rem;
  color: #222;
  font-weight: 400;
  margin-left: 2px;
}

.tour-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
}
.tour-desc {
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #444;
}
.tour-label {
  font-size: 1.05rem;
  color: var(--color-primary-text);
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
  background: var(--color-primary-text);
  border-radius: 2px;
}
.tour-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #222;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.85), 0 1px 12px rgba(255, 255, 255, 0.75);
  margin-bottom: 3rem;
  margin-top: 0;
}
@media (max-width: 900px) {
  .activities-grid {
    gap: 1rem;
  }
  .activities-section {
  padding: 4rem 1rem 4rem 1rem;
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
.tour-days-badge {
  position: absolute;
  top: 320px;
  right: 2rem;
  background: #fff;
  border: 3px solid rgba(208, 208, 208, 0.83);
  outline: 4px solid #fff;
  color: #222222;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  z-index: 2;
}
.days-number {
  font-size: 1.4rem;
  line-height: 1;
}
.days-label {
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  margin-top: -2px;
}
.tour-card {
  position: relative;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 1rem rgba(0,0,0,0.07);
  border: 2.5px solid #edeaf7;
  max-width: 350px;
  min-width: 270px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.18s, box-shadow 0.18s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.2rem 0.2rem 0 0.2rem;
}
.tour-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
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
  overflow: hidden;
  border-radius: 1rem;
  /* border removed to fix aspect ratio */
}

.tour-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 1rem;
  border: 4px solid #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  background: #fff;
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}


</style>
