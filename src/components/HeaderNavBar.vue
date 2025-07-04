<template>
  <header class="header-navbar">
    <nav class="navbar">
    
      <a href="#hero" class="logo-title" @click="onMenuClick($event, '#hero')" aria-label="Go to homepage">
        <picture>
          <source 
            type="image/webp" 
            srcset="/images/logo-img/ttg-logo-160w.webp 1x, /images/logo-img/ttg-logo-320w.webp 2x"
          />
          <source 
            type="image/png" 
            srcset="/images/logo-img/ttg-logo-160w.png 1x, /images/logo-img/ttg-logo-320w.png 2x"
          />
          <img
            src="/images/logo-img/ttg-logo-160w.png"
            alt="Transylvania Tour Guide Logo"
            class="logo"
            loading="lazy"
          />
        </picture>
        <span class="site-title">Transylvania Tour Guide</span>
      </a>
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
      <button v-if="!isDesktop" class="hamburger-menu" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="isMenuOpen">
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
import { ref, onMounted, onUnmounted } from 'vue';
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
/* Base Styles */
html {
  scroll-behavior: smooth;
}

.header-navbar {
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: absolute;
  top: 0;
  left: 0; 
  width: 100%;
  z-index: 2000;  
  transition: background 0.35s cubic-bezier(.4,0,.2,1);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  box-sizing: border-box;
}

/* Scrolled State */
.header-navbar.scrolled .logo {
  filter: none;
}

/* Logo and Title */
.logo-title {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

.logo {
  height: clamp(4rem, 10vw, 6rem);
  margin-right: 1rem;
  filter: brightness(1.1) invert(0);
  transition: filter 0.28s cubic-bezier(.4,0,.2,1);
}

.site-title {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: bold;
  color: var(--color-text-dark-strong);
  transition: color 0.28s cubic-bezier(.4,0,.2,1);
}

/* Desktop Navigation */
.nav-menu {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--color-text-dark-strong);
  transition: color 0.2s;
}

.nav-menu a:hover {
  color: var(--color-text-highlight);
}

.nav-menu a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background: var(--color-text-highlight);
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  transition: transform 0.6s cubic-bezier(.4,0,.2,1);
}

.nav-menu a:hover::after {
  transform: translateX(-50%) scaleX(1);
}

/* Hamburger Menu */
.hamburger-menu {
  display: none;
  width: 3rem;
  height: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1202;
}

.hamburger-menu svg {
  width: 2rem;
  height: 2rem;
  color: var(--color-text-dark-strong);
}

/* === Responsive Styles === */

/* Tablet & Mobile */
@media (max-width: 56rem) {
  .navbar {
    padding: 0.5rem 1rem;
  }

  .hamburger-menu {
    display: block;
  }

  .hamburger-menu.is-active {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 2001;
  } 

  /* Mobile Overlay Menu */
  .nav-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-background-light-mute);
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
    list-style: none;
    margin: 0;
    overflow-y: scroll;
  }

  .nav-menu-overlay a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: 500;
    color: var(--color-text-dark-strong);
    transition: background 0.2s, color 0.2s;
  }

  .nav-menu-overlay a:hover {
    color: var(--color-text-highlight);
  }

  .nav-menu-overlay a:focus, .nav-menu-overlay a:hover {
    background: rgba(255, 168, 0, 0.13);
    outline: none;
  }

  .nav-menu-overlay a::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: var(--color-text-highlight);
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    transition: transform 0.6s cubic-bezier(.4,0,.2,1);
  }

  .nav-menu-overlay a:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
}

/* Small Mobile */
@media (max-width: 16rem) {
  .site-title {
    display: none;
  } 
}
</style>
