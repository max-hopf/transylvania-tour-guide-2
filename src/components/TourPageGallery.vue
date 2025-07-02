<template>
  <section class="details-page-gallery">
    <div class="gallery-label">
      Gallery <span class="gallery-label-line"></span>
    </div>
    <h2 class="gallery-title">Explore Images</h2>
    <div class="gallery-grid-justified" ref="containerRef">
      <div
        v-for="(row, rowIdx) in rows"
        :key="'row-' + rowIdx"
        class="gallery-row"
      >
        <div
          v-for="(img, idx) in row"
          :key="img.src + idx"
          class="gallery-item"
          :style="{
            width: img.displayWidth + 'px',
            height: img.displayHeight + 'px',
            marginRight: idx < row.length - 1 ? gap + 'px' : 0
          }"
        >
          <img :src="img.src" :alt="img.alt || ''" loading="lazy" :style="{width: '100%', height: '100%', objectFit: 'cover'}" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});

// Configurable
const rowHeight = 420; // px
const gap = 8; // px
const containerRef = ref(null);
const containerWidth = ref(1200); // fallback

function getAspectRatio(img) {
  // Try to infer from orientation, fallback to 3:2 or 2:3
  if (img.orientation === 'landscape') return 3/2;
  if (img.orientation === 'portrait') return 2/3;
  return 1; // square
}

function computeRows(images, containerWidth, rowHeight, gap) {
  const rows = [];
  let row = [];
  let rowAspectSum = 0;
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const aspect = getAspectRatio(img);
    row.push({ ...img, _aspect: aspect });
    rowAspectSum += aspect;
    // Estimate total width if we add this image
    const rowGap = gap * (row.length - 1);
    const estRowWidth = rowAspectSum * rowHeight + rowGap;
    if (estRowWidth >= containerWidth * 0.95 || i === images.length - 1) {
      // Calculate actual row height for this row
      const scale = (containerWidth - rowGap) / (rowAspectSum * rowHeight);
      const displayRowHeight = rowHeight * scale;
      rows.push(row.map(img => ({
        ...img,
        displayWidth: img._aspect * displayRowHeight,
        displayHeight: displayRowHeight
      })));
      row = [];
      rowAspectSum = 0;
    }
  }
  return rows;
}

const rows = ref([]);

function updateRows() {
  if (!containerRef.value) return;
  containerWidth.value = containerRef.value.clientWidth;
  rows.value = computeRows(props.images, containerWidth.value, rowHeight, gap);
}

onMounted(() => {
  window.addEventListener('resize', updateRows);
  setTimeout(updateRows, 50); // after mount
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateRows);
});
watch(() => props.images, updateRows);

</script>

<style scoped>

.details-page-gallery {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-background);
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.gallery-label {
  font-size: 1.05rem;
  color: var(--color-text-highlight);
  font-weight: 600;
  margin-bottom: 0.6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
}
.gallery-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: var(--color-text-highlight);
  border-radius: 2px;
}
.gallery-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--color-text-dark);
  margin-top: 0;
}
.gallery-grid-justified {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 2rem 1rem;
}
.gallery-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.gallery-item {
  background: var(--color-background-light);
  overflow: hidden;
  display: block;
  /* border-radius: 8px; */
}
.gallery-item {
  /* border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08); */
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.gallery-item.portrait {
  grid-row: span 5;
  grid-column: span 1;
}
.gallery-item.landscape {
  grid-column: span 1;
  grid-row: span 2;
}
.gallery-item.square {
  /* default: 1x1 */
  grid-column: span 1;
  grid-row: span 1;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 24vw;
  }
}
@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 48vw;
  }
  .gallery-item.portrait, .gallery-item.landscape {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
