<template>
  <TourPageHeroSection
    title="The Wooden Country of Maramures"
    description="Discover the authentic traditions, wooden churches, and breathtaking landscapes of Maramureș."
    imageName="maramures-title-img"
  />
  <TourPageEssentialsSection
    duration="3 days"
    price="from 590 € / person"
    groupSize="2 – 7 participants"
  />

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <p class="activity-details-intro">
        <strong>Maramureș is one of the most authentic destinations to experience traditional Romanian culture and rural life.</strong><br /><div class="spacer"></div>
        Here, locals have preserved the ancestral way of living—marked by time-honored traditions, skilled craftsmanship, and a self-sufficient, simple lifestyle that reflects deep cultural roots.<br /><div class="spacer"></div>
        Explore charming villages and iconic landmarks, take in the region’s picturesque landscapes, connect with welcoming locals, and enjoy wholesome, homegrown cuisine in the heart of the Romanian countryside.
      </p>
    </div>
  </section>

  <ProgressiveDisclosureInterface :tabs="maramuresTabs" />

  <TourPageGallery :images="galleryImages" galleryName="maramures" />

  <FooterSection />
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
import TourPageEssentialsSection from './TourPageEssentialsSection.vue';
import TourPageHeroSection from './TourPageHeroSection.vue';
import TourPageGallery from './TourPageGallery.vue';
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue';


const galleryImages = [
  { baseName: '1659594400829_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20220708_184008-l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20221026_095154_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20230913_164238_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20230915_115121_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240420_181638_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240423_113942_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240428_101040_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240503_145521_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240529_135557_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240621_164136_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240627_172548_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240627_174227_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240627_175358(0)_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240627_175411_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240628_100641_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240628_155056_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240628_161919_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240628_162303_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240901_142603_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240924_163953_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240924_165732_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240924_172850_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: '20240926_120541_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20240927_130059_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: '20241212_095951_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: 'IMG_20201014_103359_607_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: 'IMG_20220709_092253_296_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: 'IMG_20230914_111706_499_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
  { baseName: 'P1030376_l', alt: 'A scenic view of Maramures', orientation: 'landscape' },
  { baseName: 'Wooden-Church-in-Surdesti-1_p', alt: 'A scenic view of Maramures', orientation: 'portrait' },
];

const maramuresTabs = [
  {
    label: `What’s Included`,
    content: `<ul>
      <li>All transportation from Cluj-Napoca or other cities in Transylvania</li>
      <li>2-night stay at a traditional local guesthouse</li>
      <li>Half board (breakfast and dinner with locally sourced meals)</li>
      <li>Entrance to several key attractions</li>
      <li>Special tasting of the region’s iconic drink: palincă</li>
    </ul>`
  },
  {
    label: `Highlights of the Tour`,
    content: `
      <ul>
        <li>Explore 2–3 UNESCO-listed Wooden Churches</li>
        <li>Visit the powerful Memorial to the Victims of Communism in Sighetu Marmației</li>
        <li>Experience the unique Merry Cemetery in Săpânța</li>
        <li>The monastic wooden complex of Barsana</li>
      </ul><br>
      <strong>Cultural immersion:</strong><ul>
        <li>Savor home-cooked Romanian dishes made from fresh, local ingredients</li>
        <li>Stay in a family-run guesthouse where hosts make their own cheese and cured meats.</li>
        <li>Engage with locals and discover traditional crafts like woodcarving and knitting</li>
      </ul>
      `
  },
  {
    label: `Optional Extension`,
    content: `Make it a 4-day escape! Ride the scenic Mocănița steam train (ticket included), enjoy a more relaxed itinerary, take peaceful hikes through the villages, and discover hidden gems at a slower pace.`
  },
  {
    label: `Travel responsibly`,
    content: `This trip supports local communities and gives you meaningful opportunities to learn about their way of life.`
  }
];
</script>

<style scoped>
.activity-details-section {
  background: #fff;
  padding: 4rem 2rem 4rem 2rem;
  color: #222;
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

.activity-details-intro {
  text-align: left;
  color: #222;
}
</style>
