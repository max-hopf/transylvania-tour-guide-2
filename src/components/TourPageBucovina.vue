<template>
  <div class="tour-page">
    <h1>Bucovina Monasteries Tour</h1>
    <p>Discover the painted monasteries of Bucovina, true masterpieces of Byzantine art.</p>
    <ProgressiveDisclosureInterface :tabs="bucovinaTabs" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue';

const bucovinaTabs = ref([
  {
    label: 'Highlights',
    content: '<ul><li>Visit the Voronet, Moldovita, and Sucevita monasteries.</li><li>Learn about the unique blue paint of Voronet.</li><li>Enjoy the scenic landscapes of the Bucovina region.</li></ul>'
  },
  {
    label: 'What\'s Included',
    content: 'This tour includes a specialized guide, transportation, and entrance fees to the monasteries.'
  }
]);
</script>

<style scoped>
.tour-page {
  padding: 2rem;
  text-align: center;
}
</style>
