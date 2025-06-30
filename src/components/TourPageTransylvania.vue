<template>
  <div class="tour-page">
    <h1>Transylvania Tour</h1>
    <p>
      Welcome to the heart of Romania. This tour covers the most iconic locations in Transylvania.
    </p>
    <ProgressiveDisclosureInterface :tabs="transylvaniaTabs" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue'

const transylvaniaTabs = ref([
  {
    label: 'Itinerary',
    content:
      "<ul><li>Day 1: Arrival in Brasov, check-in and city tour.</li><li>Day 2: Visit Bran Castle (Dracula's Castle) and Rasnov Fortress.</li><li>Day 3: Explore Sighisoara Citadel, a UNESCO World Heritage site.</li></ul>",
  },
  {
    label: 'Accommodation',
    content: 'Accommodation is provided in 3-star hotels with breakfast included.',
  },
])
</script>

<style scoped>
.tour-page {
  padding: 2rem;
  text-align: center;
}
</style>
