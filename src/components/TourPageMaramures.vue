<template>
  <div class="tour-page">
    <h1>Maramures Wooden Churches Tour</h1>
    <p>Explore the traditional region of Maramures with its unique wooden churches and well-preserved traditions.</p>
    <ProgressiveDisclosureInterface :tabs="maramuresTabs" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue';

const maramuresTabs = ref([
  {
    label: 'Key Sights',
    content: '<ul><li>Visit the Merry Cemetery of Sapanta.</li><li>Explore the wooden churches of Barsana and Desesti.</li><li>Experience the local culture and hospitality.</li></ul>'
  },
  {
    label: 'Duration',
    content: 'This is a 2-day tour starting from Cluj-Napoca.'
  }
]);
</script>

<style scoped>
.tour-page {
  padding: 2rem;
  text-align: center;
}
</style>
