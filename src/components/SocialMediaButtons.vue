<template>
  <div class="social-media-buttons">
    <a
      :class="['social-btn', 'tripadvisor', { open: isTripadvisorOpen }]"
      href="https://www.tripadvisor.com/Attraction_Review-g298474-d10182481-Reviews-Transylvania_Tour_Guide-Cluj_Napoca_Cluj_County_Northwest_Romania_Transylvania.html"
      target="_blank"
      rel="noopener noreferrer"
      @touchstart="e => onTouchStart(e, 'tripadvisor')"
      @touchmove="e => onTouchMove(e, 'tripadvisor')"
      @touchend="e => onTouchEnd(e, 'tripadvisor')"
      @click.stop
    >
      <img src="../assets/social-media-icons/tripadvisor-icon-1.svg" alt="TripAdvisor" />
      <span class="social-label">tripadvisor</span>
    </a>
    <a
      :class="['social-btn', 'instagram', { open: isInstagramOpen }]"
      href="https://www.instagram.com/transylvanicus/"
      target="_blank"
      rel="noopener noreferrer"
      @touchstart="e => onTouchStart(e, 'instagram')"
      @touchmove="e => onTouchMove(e, 'instagram')"
      @touchend="e => onTouchEnd(e, 'instagram')"
      @click.stop
    >
      <img src="../assets/social-media-icons/instagram-icon-3.svg" alt="Instagram" />
      <span class="social-label">instagram</span>
    </a>
    <a
      :class="['social-btn', 'linkedin', { open: isLinkedinOpen }]"
      href="https://www.linkedin.com/in/florin-merciu-bb4904202/"
      target="_blank"
      rel="noopener noreferrer"
      @touchstart="e => onTouchStart(e, 'linkedin')"
      @touchmove="e => onTouchMove(e, 'linkedin')"
      @touchend="e => onTouchEnd(e, 'linkedin')"
      @click.stop
    >
      <img src="../assets/social-media-icons/linkedin-icon-2.svg" alt="LinkedIn" />
      <span class="social-label">linkedin</span>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isInstagramOpen = ref(false);
const isLinkedinOpen = ref(false);
const isTripadvisorOpen = ref(false);

let dragStartX = { instagram: 0, linkedin: 0, tripadvisor: 0 };
let dragCurrentX = { instagram: 0, linkedin: 0, tripadvisor: 0 };
let dragging = { instagram: false, linkedin: false, tripadvisor: false };

function isMobile() {
  return window.innerWidth <= 600;
}

function onTouchStart(e, network) {
  if (!isMobile()) return;
  dragging[network] = true;
  dragStartX[network] = e.touches[0].clientX;
  dragCurrentX[network] = dragStartX[network];
}

function onTouchMove(e, network) {
  if (!dragging[network] || !isMobile()) return;
  dragCurrentX[network] = e.touches[0].clientX;
}

function onTouchEnd(e, network) {
  if (!dragging[network] || !isMobile()) return;
  const dx = dragCurrentX[network] - dragStartX[network];
  if (dx < -40) {
    openButton(network);
  } else if (dx > 40) {
    closeButton(network);
  }
  dragging[network] = false;
}

function openButton(network) {
  if (network === 'instagram') {
    isInstagramOpen.value = true;
    isLinkedinOpen.value = false;
  } else if (network === 'linkedin') {
    isLinkedinOpen.value = true;
    isInstagramOpen.value = false;
  }
}

function closeButton(network) {
  if (network === 'instagram') {
    isInstagramOpen.value = false;
  } else if (network === 'linkedin') {
    isLinkedinOpen.value = false;
  }
}

function handleClickOutside(e) {
  // Only close if click is outside both buttons
  isInstagramOpen.value = false;
  isLinkedinOpen.value = false;
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.social-media-buttons {
  position: absolute;
  top: 10rem;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  width: 170px; /* enough for expanded button */
  align-items: flex-end;
}
.social-btn {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 24px 0 0 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  padding: 1rem 1.5rem 1rem 1rem;
  width: 3rem;
  height: 3rem;
  transition: width 0.3s cubic-bezier(.4,2,.6,1), background 0.2s;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  right: 0;
  text-decoration: none;
}
.social-btn:hover {
  width: 10rem;
  background: #f5f5f5;
}

.social-btn:hover img {
  filter: brightness(0) invert(1);
}
.social-btn img {
  width: 1.25rem;
  height: 1.25rem;
  display: block;
}
.social-label {
  color: var(--color-text-dark);
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0;
  opacity: 0;
  white-space: nowrap;
  width: 0;
  overflow: hidden;
  transition: opacity 0.2s, margin 0.3s, width 0.3s;
}

.social-btn:hover .social-label {
  opacity: 1;
  margin-left: 0.75rem;
  width: 10rem;
}
.social-btn.instagram:hover {
  background: #e1306c;
}
.social-btn.instagram:hover .social-label {
  color: #fff;
}
.social-btn.linkedin:hover {
  background: #0077b5;
}
.social-btn.linkedin:hover .social-label {
  color: #fff;
}
.social-btn.tripadvisor:hover {
  background: #479951;
}
.social-btn.tripadvisor:hover .social-label {
  color: #fff;
}
@media (max-width: 900px) {
  .social-media-buttons {
    position: absolute;
    top: unset;
    bottom: 2rem;
    right: 0;
    gap: 0.5rem;
    /* width: 120px; */
  }
  .social-label {
    width: 0;
    margin-left: 0;
  }
  .social-btn:hover .social-label {
    width: 80%;
    /* margin-left: 0.5rem; */
  }
}

</style>
