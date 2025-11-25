<script setup>
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Transylvania Tour Guide',
  titleTemplate: '%s | Transylvania Tour Guide',
  meta: [
    { name: 'description', content: 'Discover the beauty of Transylvania with our guided tours. Visit castles, fortified churches, and experience the local culture.' },
    { property: 'og:title', content: 'Transylvania Tour Guide' },
    { property: 'og:description', content: 'Discover the beauty of Transylvania with our guided tours.' },
    { property: 'og:image', content: '/images/castle-featured.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '1200' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/images/castle-featured.jpg' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Transylvania Tour Guide',
        url: 'https://www.yourguideintransylvania.com',
        logo: 'https://www.yourguideintransylvania.com/favicon.ico',
        image: 'https://www.yourguideintransylvania.com/images/castle-featured.jpg',
        description: 'Private tours in Transylvania, Romania.',
      }),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
