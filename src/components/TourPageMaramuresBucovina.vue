<template>
  <TourPageHeroSection
  title="Tour Through Maramures and Bucovina"
  description="Experience the best of both Regions with our combined tour, where traditional village life meets stunning painted monasteries."
  imageName="maramures-bucovina-title-img"
/>
  <TourPageEssentialsSection
    duration="5 days"
    price="from ? € / person"
    groupSize="2 – 7 participants"
  />

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <p class="activity-details-intro">
        <strong>Why choose between Maramures and Bucovina when you can experience both?</strong><br /><div class="spacer"></div>
          Our combined tour offers the perfect blend of Maramures' authentic village life with Bucovina's world-famous painted monasteries. This unique itinerary allows you to immerse yourself in the rich cultural heritage of both regions while enjoying a seamless travel experience between them.<br /><div class="spacer"></div>
          By combining these two remarkable destinations, you'll save travel time and get a more comprehensive understanding of Romania's diverse traditions, landscapes, and history. Enjoy the convenience of a single, well-planned journey that captures the essence of both regions in one unforgettable trip.
        </p>
      </div>
    </section>

  <!-- <ProgressiveDisclosureInterface :tabs="transylvaniaTabs" />
    
  <TourPageGallery :images="galleryImages" galleryName="transylvania" /> -->

  <FooterSection />
  <BackToTopButton />
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';

import TourPageHeroSection from './TourPageHeroSection.vue';
import TourPageEssentialsSection from './TourPageEssentialsSection.vue';
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue';
import TourPageGallery from './TourPageGallery.vue';
import BackToTopButton from './BackToTopButton.vue';
// The galleryImages array now contains metadata instead of imported modules.
// This data will be used by the TourPageGallery component to construct responsive image tags.
const galleryImages = [
  { baseName: '20240104_141725_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20240104_141958_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20200128_203722_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20191023_213139_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '1655912594818_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20220604_154243_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20220817_112536_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20220612_125717_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20220829_094900_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20220622_190541_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20220618_113254_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20220612_122104_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20220829_131008_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20220622_185158_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20230128_132646_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20231102_120356_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20240520_152930_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20240930_205752_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20241005_202713_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: 'IMG_20220613_084523_930_s', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20240520_170712_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20240615_125832_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20240615_155557_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20240930_204935_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20241021_120955_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20241001_191237_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20241001_105424_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20241003_193157_p', alt: 'A scenic view of Transylvania', orientation: 'portrait' },
  { baseName: '20241002_165931_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20241001_170020_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
  { baseName: '20241002_131812_l', alt: 'A scenic view of Transylvania', orientation: 'landscape' },
];

const transylvaniaTabs = [
  {
    label: `What’s Included`,
    content: `<ul>\n      <li>Full-time guide/driver</li>\n      <li>All transportation in a modern, comfortable vehicle</li>\n      <li>2 nights’ accommodation with breakfast</li>\n      <li>Entrance fees</li>\n      <li>Bottled water provided during transfers</li>\n    </ul>`
  },
  {
    label: `Highlights of the Tour`,
    content: `You will visit Transylvania’s renowned cities: Brașov, Sibiu, and the Sighișoara Citadel, each featuring guided tours of their most significant landmarks.<br><br>\n    <strong>The standard itinerary includes:</strong><ul>\n      <li>Sighisoara Citadel</li>\n      <li>Viscri Village</li>\n      <li>Bran Castle</li>\n      <li>Transfăgărășan Road</li>\n      <li>Alba Iulia Citadel</li>\n    </ul><br>\n    <strong>The itinerary is flexible and can be customized to include additional sites such as:</strong>\n    <ul>\n      <li>Biertan Church</li>\n      <li>Turda Salt Mine</li>\n      <li>Libearty Bear Sanctuary</li>\n      <li>Peleș Castle</li>\n      <li>Corvin Castle</li>\n    </ul><br>\n    We can also arrange village walks and visits to meet local residents.`
  
  },
  {
    label: `Optional Extension`,
    content: `Add an extra night in Brașov for a more relaxed pace and the chance to visit additional locations.`
  },
  {
    label: `Booking Policy`,
    content: `<ul>\n      <li>A 30% deposit is required to secure your booking.</li>\n      <li>Cancellation policy: Full refund available for cancellations made at least 7 days before the tour start date.</li>\n    </ul>`
  }
];

</script>

<style scoped>
.activity-details-section {
  background: var(--color-background-light);
  padding: 4rem 2rem 4rem 2rem;
  color: var(--color-text-dark);
}
.activity-details-container {
  max-width: 75ch;
  margin: 0 auto;
  text-align: left;
  font-size: 1rem
}
.activity-details-container .spacer {
  display: block;
  height: 0.5rem;
}
.activity-details-container strong {
  font-weight: 600 !important;
}

.activity-details-intro {
  text-align: left;
  color: var(--color-text-dark);
}
</style>
