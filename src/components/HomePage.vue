<template>
  <div class="home-page-content">
    <HeroSection />

    <!-- <ProgressiveDisclosureInterface :tabs="tourTabs" /> -->

    <AboutUsSection />
    <OurToursSection />
    <TestimonialsSection />
    <ContactSection />
  </div> 
  <FooterSection />
</template>

<script setup>
import { ref } from 'vue'
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue'
import TourCard from './TourCard.vue'
import OurToursSection from './OurToursSection.vue'
import FooterSection from './FooterSection.vue'
import HeroSection from './HeroSection.vue'
import ContactSection from './ContactSection.vue'
import AboutUsSection from './AboutUsSection.vue'
import TestimonialsSection from './TestimonialsSection.vue'

const tourTabs = ref([
  {
    label: `What’s Included`,
    content: `<ul>
      <li>Full-time guide/driver</li>
      <li>All transportation in a modern, comfortable vehicle</li>
      <li>2 nights’ accommodation with breakfast</li>
      <li>Entrance fees</li>
      <li>Bottled water provided during transfers</li>
    </ul>`,
  },
  {
    label: `Highlights of the Tour`,
    content: `You will visit Transylvania’s renowned cities: Brașov, Sibiu, and the Sighișoara Citadel, each featuring guided tours of their most significant landmarks.<br><br>
    <strong>The standard itinerary includes:</strong><ul>
      <li>Sighisoara Citadel</li>
      <li>Viscri Village</li>
      <li>Bran Castle</li>
      <li>Transfăgărășan Road</li>
      <li>Alba Iulia Citadel</li>
    </ul><br>
    <strong>The itinerary is flexible and can be customized to include additional sites such as:</strong>
    <ul>
      <li>Biertan Church</li>
      <li>Turda Salt Mine</li>
      <li>Libearty Bear Sanctuary</li>
      <li>Peleș Castle</li>
      <li>Corvin Castle</li>
    </ul><br>
    We can also arrange village walks and visits to meet local residents.`,
  },
  {
    label: `Optional Extension`,
    content: `Add an extra night in Brașov for a more relaxed pace and the chance to visit additional locations.`,
  },
  {
    label: `Booking Policy`,
    content: `<ul>
      <li>A 30% deposit is required to secure your booking.</li>
      <li>Cancellation policy: Full refund available for cancellations made at least 7 days before the tour start date.</li>
    </ul>`,
  },
])
</script>

<style scoped>

</style>
