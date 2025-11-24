<script setup>
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Transylvania Tour Guide',
  titleTemplate: '%s | Transylvania Tour Guide',
  meta: [
    { name: 'description', content: 'Discover the beauty of Transylvania with our guided tours. Visit castles, fortified churches, and experience the local culture.' },
    { property: 'og:title', content: 'Transylvania Tour Guide' },
    { property: 'og:description', content: 'Discover the beauty of Transylvania with our guided tours.' },
    { property: 'og:image', content: '/images/hero-img/hero-img-1920w.webp' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
