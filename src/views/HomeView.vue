<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useHead } from '@vueuse/head'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Transylvania Tour Guide - Home',
        url: 'https://www.yourguideintransylvania.com',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://transylvaniatourguide.com/images/rich-snippet-thumbnail.jpg',
        },
      }),
    },
  ],
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
