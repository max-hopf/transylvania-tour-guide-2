<template>
  <TourPageHeroSection
  title="Transylvania Tour from Cluj-Napoca"
  description="Designed to explore the major attractions and uncover the authentic charm of Transylvania."
  :backgroundImage="heroImg"
/>
  <TourPageEssentialsSection
    duration="3 days"
    price="from 790 € / person"
    groupSize="2 – 7 participants"
  />

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <p class="activity-details-intro">
        <strong>Transylvania is a land of timeless charm—where medieval castles and
          fortified towns meet rolling hills dotted with haystacks and untouched
          wilderness.</strong><br /><div class="spacer"></div>
          This enchanting region offers a rare glimpse into a way of life steeped
          in tradition and natural beauty. Friendly locals will welcome you with
          home-cooked meals prepared from their own gardens, often accompanied by
          folk tales and stories passed down through generations.<br /><div class="spacer"></div>
          On this tour, you will explore Transylvania’s most iconic sights and
          immerse yourself in the very essence of what makes this region so
          captivating and unforgettable.
        </p>
      </div>
    </section>

  <ProgressiveDisclosureInterface :tabs="transylvaniaTabs" />
    
    <!-- <DetailsPageGallery :images="galleryImages" /> -->

  <FooterSection />
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
import heroImg from '../assets/tour-page-title-images/transylvania-title-img.jpg';
import TourPageHeroSection from './TourPageHeroSection.vue';
import TourPageEssentialsSection from './TourPageEssentialsSection.vue';
// import DetailsPageGallery from './DetailsPageGallery.vue';
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue';

// import img01 from '../assets/detailsPageGalleryTransylvania/1655912594818_l.jpg';
// import img02 from '../assets/detailsPageGalleryTransylvania/20191023_213139_p.jpg';
// import img03 from '../assets/detailsPageGalleryTransylvania/20200128_203722_l.jpg';
// import img04 from '../assets/detailsPageGalleryTransylvania/20220604_154243_l.jpg';
// import img05 from '../assets/detailsPageGalleryTransylvania/20220612_122104_l.jpg';
// import img06 from '../assets/detailsPageGalleryTransylvania/20220612_125717_l.jpg';
// import img07 from '../assets/detailsPageGalleryTransylvania/20220618_113254_l.jpg';
// import img08 from '../assets/detailsPageGalleryTransylvania/20220622_185158_l.jpg';
// import img09 from '../assets/detailsPageGalleryTransylvania/20220622_190541_l.jpg';
// import img10 from '../assets/detailsPageGalleryTransylvania/20220817_112536_p.jpg';
// import img11 from '../assets/detailsPageGalleryTransylvania/20220829_094900_p.jpg';
// import img12 from '../assets/detailsPageGalleryTransylvania/20220829_131008_p.jpg';
// import img13 from '../assets/detailsPageGalleryTransylvania/20230128_132646_p.jpg';
// import img14 from '../assets/detailsPageGalleryTransylvania/20231102_120356_l.jpg';
// import img15 from '../assets/detailsPageGalleryTransylvania/20240104_141725_l.jpg';
// import img16 from '../assets/detailsPageGalleryTransylvania/20240104_141958_p.jpg';
// import img17 from '../assets/detailsPageGalleryTransylvania/20240520_152930_l.jpg';
// import img18 from '../assets/detailsPageGalleryTransylvania/20240520_170712_l.jpg';
// import img19 from '../assets/detailsPageGalleryTransylvania/20240615_125832_l.jpg';
// import img20 from '../assets/detailsPageGalleryTransylvania/20240615_155557_l.jpg';
// import img21 from '../assets/detailsPageGalleryTransylvania/20240930_204935_l.jpg';
// import img22 from '../assets/detailsPageGalleryTransylvania/20240930_205752_p.jpg';
// import img23 from '../assets/detailsPageGalleryTransylvania/20241001_105424_l.jpg';
// import img24 from '../assets/detailsPageGalleryTransylvania/20241001_170020_l.jpg';
// import img25 from '../assets/detailsPageGalleryTransylvania/20241001_191237_p.jpg';
// import img26 from '../assets/detailsPageGalleryTransylvania/20241002_131812_l.jpg';
// import img27 from '../assets/detailsPageGalleryTransylvania/20241002_165931_l.jpg';
// import img28 from '../assets/detailsPageGalleryTransylvania/20241003_193157_p.jpg';
// import img29 from '../assets/detailsPageGalleryTransylvania/20241005_202713_p.jpg';
// import img30 from '../assets/detailsPageGalleryTransylvania/20241021_120955_p.jpg';
// import img31 from '../assets/detailsPageGalleryTransylvania/IMG_20220613_084523_930_s.jpg';

// const galleryImages = [
//   { src: img15, alt: '', orientation: 'landscape' },
//   { src: img16, alt: '', orientation: 'portrait' },
//   { src: img03, alt: '', orientation: 'landscape' },
//   { src: img02, alt: '', orientation: 'portrait' },
//   { src: img01, alt: '', orientation: 'landscape' },
//   { src: img04, alt: '', orientation: 'landscape' },
//   { src: img10, alt: '', orientation: 'portrait' },
//   { src: img06, alt: '', orientation: 'landscape' },
//   { src: img11, alt: '', orientation: 'portrait' },
//   { src: img09, alt: '', orientation: 'landscape' },
//   { src: img07, alt: '', orientation: 'landscape' },
//   { src: img05, alt: '', orientation: 'landscape' },
//   { src: img12, alt: '', orientation: 'portrait' },
//   { src: img08, alt: '', orientation: 'landscape' },
//   { src: img13, alt: '', orientation: 'portrait' },
//   { src: img14, alt: '', orientation: 'landscape' },
//   { src: img17, alt: '', orientation: 'landscape' },
//   { src: img22, alt: '', orientation: 'portrait' },
//   { src: img29, alt: '', orientation: 'portrait' },
//   { src: img31, alt: '', orientation: 'portrait' },
//   { src: img18, alt: '', orientation: 'landscape' },
//   { src: img19, alt: '', orientation: 'landscape' },
//   { src: img20, alt: '', orientation: 'landscape' },
//   { src: img21, alt: '', orientation: 'landscape' },
//   { src: img30, alt: '', orientation: 'portrait' },
//   { src: img25, alt: '', orientation: 'portrait' },
//   { src: img23, alt: '', orientation: 'landscape' },
//   { src: img28, alt: '', orientation: 'portrait' },
//   { src: img27, alt: '', orientation: 'landscape' },
//   { src: img24, alt: '', orientation: 'landscape' },
//   { src: img26, alt: '', orientation: 'landscape' },
// ];
const transylvaniaTabs = [
  {
    label: `What’s Included`,
    content: `<ul>
      <li>Full-time guide/driver</li>
      <li>All transportation in a modern, comfortable vehicle</li>
      <li>2 nights’ accommodation with breakfast</li>
      <li>Entrance fees</li>
      <li>Bottled water provided during transfers</li>
    </ul>`
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
    We can also arrange village walks and visits to meet local residents.`
  
  },
  {
    label: `Optional Extension`,
    content: `Add an extra night in Brașov for a more relaxed pace and the chance to visit additional locations.`
  },
  {
    label: `Booking Policy`,
    content: `<ul>
      <li>A 30% deposit is required to secure your booking.</li>
      <li>Cancellation policy: Full refund available for cancellations made at least 7 days before the tour start date.</li>
    </ul>`
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
