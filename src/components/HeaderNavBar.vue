<template>
  <header class="header-navbar">
    <nav class="navbar">
    
      <div class="logo-title">
        <picture>
  <source v-if="logoImages[0].webp && logoImages[0].webp.length"
    :srcset="logoImages[0].webp.map((w, i) => w + ' ' + [400, 800, 1600][i] + 'w').join(', ')"
    type="image/webp"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <source v-if="logoImages[0].jpeg && logoImages[0].jpeg.length"
    :srcset="logoImages[0].jpeg.map((j, i) => j + ' ' + [400, 800, 1600][i] + 'w').join(', ')"
    type="image/png"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <img
    v-if="logoImages[0].fallback"
    :src="logoImages[0].fallback"
    alt="Transylvania Tour Guide Logo"
    class="logo"
    loading="lazy"
  />
</picture>
        <span class="site-title">Transylvania Tour Guide</span>
      </div>
      <transition name="fade">
        <ul v-if="isMenuOpen && !isDesktop" class="nav-menu-overlay" aria-label="Main navigation">
          <li v-for="item in menuItems" :key="item.href">
            <a :href="item.href" @click="onMenuClick($event, item.href)">{{ item.label }}</a>
          </li>
        </ul>
      </transition>
      <ul v-if="isDesktop" class="nav-menu" aria-label="Main navigation">
        <li v-for="item in menuItems" :key="item.href">
          <a :href="item.href" @click="onMenuClick($event, item.href)">{{ item.label }}</a>
        </li>
      </ul>
      <transition name="fade">
        <div v-if="isMenuOpen" class="overlay" @click="closeMenu"></div>
      </transition>
      <button v-if="!isDesktop" class="hamburger-menu" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="isMenuOpen">
        <svg v-if="!isMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { images as logoImages } from '../assets/logo-images/logoImages.js';
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Activities', href: '#activities' },
  { label: 'Blog', href: '#blog' }, // This will link to section with id="blog"
  { label: 'Contact', href: '#contact' }, // This will link to section with id="contact"
];

const isMenuOpen = ref(false)
const isDesktop = ref(false)
let mediaQuery

const checkScreenSize = () => {
  if (mediaQuery) {
    isDesktop.value = mediaQuery.matches
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 56rem)')
  checkScreenSize() // Initial check
  mediaQuery.addEventListener('change', checkScreenSize)
})

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', checkScreenSize)
  }
});

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

const router = useRouter ? useRouter() : null;
const route = useRoute ? useRoute() : null;

function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }, 600);
  }
}

function onMenuClick(event, href) {
  if (href.startsWith('#')) {
    event.preventDefault();
    closeMenu();
    if (route && route.path === '/' && typeof window !== 'undefined') {
      // Already on homepage, just scroll
      scrollToHash(href);
    } else if (router) {
      // Not on homepage, navigate to homepage with hash
      router.push({ path: '/', hash: href }).then(() => {
        // Wait for DOM to update
        setTimeout(() => {
          scrollToHash(href);
        }, 400);
      });
    }
  }
}

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.header-navbar {
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: absolute;
  top: 0;
  left: 0; 
  width: 100vw;
  z-index: 2000;  
  margin: 0;
  padding: 0;
  transition: background 0.35s cubic-bezier(.4,0,.2,1);
}
.header-navbar .site-title,
.header-navbar .nav-menu a,
.header-navbar .nav-menu-overlay a {
  color: var(--color-text-dark-strong);
  /* text-shadow: 0 1px 6px rgba(0, 0, 0, 1), 0 1px 12px rgba(0, 0, 0, 1); */
  transition: color 0.28s cubic-bezier(.4,0,.2,1);
}
.header-navbar .nav-menu a {
  font-weight: 600;
}
.header-navbar.scrolled .site-title,
.header-navbar.scrolled .nav-menu a,
.header-navbar.scrolled .nav-menu-overlay a {
  color: var(--color-text-dark-strong);
}
.header-navbar .logo {
  filter: brightness(1.1) invert(0);
  transition: filter 0.28s cubic-bezier(.4,0,.2,1);
}
.header-navbar.scrolled .logo {
  filter: none;
}



.hamburger-menu {
  display: none;
  /* position: absolute;
  top: 0.7rem; */
  right: 1.2rem;
  width: 3rem;
  height: 3rem;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  z-index: 1202;
  box-shadow: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hamburger-menu svg {
  width: 2rem;
  height: 2rem;
  display: block;
  margin: 0 auto;
  color: var(--color-text-dark-strong);
}
.hamburger-menu:focus, .hamburger-menu:focus-visible {
  outline: none;
  /* outline: 1px solid #606060;
  outline-offset: 1px;
  border-radius: 0.5em; */
}
@media (max-width: 56rem) {
  .hamburger-menu {
    display: block;
    /* position: absolute;
    top: 0.7rem;
    right: 1.2rem; */
  }
}
@media (min-width: 56rem) {
  .hamburger-menu {
    display: none !important;
  }
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0.5rem 2.5rem;
  box-sizing: border-box;
}
.logo-title {
  display: flex;
  align-items: center;
}
.logo {
  height: clamp(4rem, 10vw, 6rem);
  margin-right: 1rem;
}
.site-title {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: bold;
  color: var(--color-text-dark-strong);
}
.nav-menu {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: opacity 0.3s;
}
.nav-menu a {
  position: relative;
  text-decoration: none;
  color: var(--color-text-dark-strong);
  font-weight: 500;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  transition: color 0.2s;
}
.nav-menu a::after {
  height: 2px;
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 100%;
  background: var(--color-text-highlight);
  transition: transform 0.6s cubic-bezier(.4,0,.2,1);
}
.nav-menu a:hover::after {
  transform: translateX(-50%) scaleX(1);
}
.nav-menu a:hover {
  color: var(--color-text-highlight);
}

@media (max-width: 56rem ) {
  .navbar {
    flex-direction: row;
    padding: 0.5rem 1rem;
    align-items: center;
  }
  .nav-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
    background-color: var(--color-background-light-mute);
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
    list-style: none;
    margin: 0;
    box-sizing: border-box;
  }
  .nav-menu-overlay a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 100vw;
    /* margin-left: -2rem; Counteract overlay padding for edge-to-edge */
    padding: 0.5rem 0;
    /* min-height: 3.2rem; */
    font-size: 1.3rem;
    text-align: center;
    border-radius: 0.5em;
    background: transparent;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    transition: background 0.2s, color 0.2s;
  }
  .nav-menu-overlay a:focus, .nav-menu-overlay a:hover {
    background: rgba(255, 168, 0, 0.13); /* subtle highlight using primary color */
    outline: none;
    color: inherit;
  }
  .nav-menu-overlay a::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px;
    background: var(--color-text-highlight);
    transition: transform 0.6s cubic-bezier(.4,0,.2,1);
  }
  .nav-menu-overlay a:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  .nav-menu-overlay a:hover {
    color: var(--color-text-highlight);
  }
  
}
@media (max-width: 600px) {
  .navbar {
    flex-direction: row;
    align-items: center;
  }
  /* .logo {
    height: 4rem;
    margin-right: 0.25rem;
  } */
  /* .site-title {
    font-size: 1.2rem;
  } */
}

@media (max-width: 16rem) {
  .site-title {
    display: none;
  } 
}
</style>
