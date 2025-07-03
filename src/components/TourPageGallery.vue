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
          :key="img.baseName + idx"
          class="gallery-item"
          :style="{
            width: img.displayWidth + 'px',
            height: img.displayHeight + 'px',
            marginRight: idx < row.length - 1 ? gap + 'px' : 0
          }"
        >
          <picture>
            <source
              type="image/webp"
              :srcset="generateSrcset(img.baseName, 'webp')"
              :sizes="imageSizesAttribute"
            />
            <source
              type="image/jpeg"
              :srcset="generateSrcset(img.baseName, 'jpg')"
              :sizes="imageSizesAttribute"
            />
            <img
              :src="generateFallbackSrc(img.baseName)"
              :srcset="generateSrcset(img.baseName, 'jpg')"
              :sizes="imageSizesAttribute"
              :alt="img.alt || 'A photo from the Transylvania tour'" 
              loading="lazy" 
              :style="{width: '100%', height: '100%', objectFit: 'cover'}" 
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  galleryName: {
    type: String,
    required: true
  }
});

// --- Image Generation Helpers ---
const imageSizes = [480, 800, 1200];
const imageDir = `/images/tour-page-gallery-${props.galleryName}/`;
const imageSizesAttribute = '(max-width: 400px) 80vw, (max-width: 800px) 45vw, (max-width: 1200px) 30vw, 25vw';

function generateSrcset(baseName, format) {
  return imageSizes
    .map(size => `${imageDir}${baseName}-${size}w.${format} ${size}w`)
    .join(', ');
}

function generateFallbackSrc(baseName) {
  // Fallback to a medium-sized JPEG
  return `${imageDir}${baseName}-800w.jpg`;
}
// --- End Helpers ---


// --- Justified Layout Logic ---
const rowHeight = 420; // Target row height in px
const gap = 8; // Gap between images in px
const containerRef = ref(null);
const containerWidth = ref(1200); // Default/fallback width
const rows = ref([]);

function getAspectRatio(img) {
  if (img.orientation === 'landscape') return 3 / 2;
  if (img.orientation === 'portrait') return 2 / 3;
  return 1; // Default to square
}

function computeRows(images, currentContainerWidth, targetRowHeight, gap) {
  const allRows = [];
  let currentRow = [];
  let currentRowAspectSum = 0;

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const aspectRatio = getAspectRatio(img);
    currentRow.push({ ...img, _aspect: aspectRatio });
    currentRowAspectSum += aspectRatio;

    const rowGap = gap * (currentRow.length - 1);
    const estimatedRowWidth = currentRowAspectSum * targetRowHeight + rowGap;

    // If the row is full enough or it's the last image, finalize the row
    if (estimatedRowWidth >= currentContainerWidth * 0.95 || i === images.length - 1) {
      const scaleFactor = (currentContainerWidth - rowGap) / (currentRowAspectSum * targetRowHeight);
      const displayRowHeight = targetRowHeight * scaleFactor;

      allRows.push(
        currentRow.map(imageInRow => ({
          ...imageInRow,
          displayWidth: imageInRow._aspect * displayRowHeight,
          displayHeight: displayRowHeight
        }))
      );

      // Reset for the next row
      currentRow = [];
      currentRowAspectSum = 0;
    }
  }
  return allRows;
}

function updateLayout() {
  if (!containerRef.value) return;
  containerWidth.value = containerRef.value.clientWidth;
  rows.value = computeRows(props.images, containerWidth.value, rowHeight, gap);
}

onMounted(() => {
  // Initial layout calculation
  const observer = new ResizeObserver(updateLayout);
  if (containerRef.value) {
    observer.observe(containerRef.value);
  }
  
  // Also listen to window resize as a fallback
  window.addEventListener('resize', updateLayout);
  
  // Run once after mount to ensure layout is correct
  setTimeout(updateLayout, 50); 
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout);
  // The ResizeObserver will be disconnected automatically when the component is unmounted.
});

// Re-calculate layout if the images prop changes
watch(() => props.images, updateLayout, { deep: true });
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
}
.gallery-item picture,
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
