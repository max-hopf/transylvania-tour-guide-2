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
    { property: 'og:image', content: 'https://transylvaniatourguide.com/images/rich-snippet-thumbnail.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '1200' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://transylvaniatourguide.com/images/rich-snippet-thumbnail.jpg' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://transylvaniatourguide.com/#organization',
            name: 'Transylvania Tour Guide',
            url: 'https://transylvaniatourguide.com',
            logo: 'https://transylvaniatourguide.com/favicon.ico',
            image: 'https://transylvaniatourguide.com/images/rich-snippet-thumbnail.jpg',
            description: 'Private tours in Transylvania, Romania.',
          },
          {
            '@type': 'WebPage',
            '@id': 'https://transylvaniatourguide.com/#website',
            url: 'https://transylvaniatourguide.com',
            name: 'Transylvania Tour Guide',
            description: 'Discover the beauty of Transylvania with our guided tours.',
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: 'https://transylvaniatourguide.com/images/rich-snippet-thumbnail.jpg',
              width: 1200,
              height: 1200,
            },
            image: 'https://transylvaniatourguide.com/images/rich-snippet-thumbnail.jpg',
            isPartOf: {
              '@id': 'https://transylvaniatourguide.com/#organization',
            },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
