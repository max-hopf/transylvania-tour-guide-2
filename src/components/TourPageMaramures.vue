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

  <!-- <DetailsPageGallery :images="galleryImages" /> -->

  <FooterSection />
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
import TourPageEssentialsSection from './TourPageEssentialsSection.vue';
import TourPageHeroSection from './TourPageHeroSection.vue';
import TourPageGallery from './TourPageGallery.vue';
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue';


// // Import all images from detailsPageGalleryMaramures
// import img01 from '../assets/detailsPageGalleryMaramures/1659594400829_l.jpg';
// // import img02 from '../assets/detailsPageGalleryMaramures/20210901_174722_p.heic';
// import img03 from '../assets/detailsPageGalleryMaramures/20220708_184008-l.jpg';
// import img04 from '../assets/detailsPageGalleryMaramures/20221026_095154_p.jpg';
// // import img05 from '../assets/detailsPageGalleryMaramures/20230611_112411_l.heic';
// import img06 from '../assets/detailsPageGalleryMaramures/20230913_164238_p.jpg';
// import img07 from '../assets/detailsPageGalleryMaramures/20230915_115121_p.jpg';
// import img08 from '../assets/detailsPageGalleryMaramures/20240420_181638_p.jpg';
// import img09 from '../assets/detailsPageGalleryMaramures/20240423_113942_p.jpg';
// import img10 from '../assets/detailsPageGalleryMaramures/20240428_101040_p.jpg';
// import img11 from '../assets/detailsPageGalleryMaramures/20240503_145521_l.jpg';
// import img12 from '../assets/detailsPageGalleryMaramures/20240529_135557_p.jpg';
// import img13 from '../assets/detailsPageGalleryMaramures/20240621_164136_l.jpg';
// import img14 from '../assets/detailsPageGalleryMaramures/20240627_172548_p.jpg';
// import img15 from '../assets/detailsPageGalleryMaramures/20240627_174227_l.jpg';
// import img16 from '../assets/detailsPageGalleryMaramures/20240627_175358(0)_p.jpg';
// import img17 from '../assets/detailsPageGalleryMaramures/20240627_175411_l.jpg';
// import img18 from '../assets/detailsPageGalleryMaramures/20240628_100641_l.jpg';
// import img19 from '../assets/detailsPageGalleryMaramures/20240628_155056_l.jpg';
// import img20 from '../assets/detailsPageGalleryMaramures/20240628_161919_l.jpg';
// import img21 from '../assets/detailsPageGalleryMaramures/20240628_162303_l.jpg';
// import img22 from '../assets/detailsPageGalleryMaramures/20240901_142603_l.jpg';
// import img23 from '../assets/detailsPageGalleryMaramures/20240924_163953_p.jpg';
// import img24 from '../assets/detailsPageGalleryMaramures/20240924_165732_p.jpg';
// import img25 from '../assets/detailsPageGalleryMaramures/20240924_172850_p.jpg';
// import img26 from '../assets/detailsPageGalleryMaramures/20240926_120541_l.jpg';
// import img27 from '../assets/detailsPageGalleryMaramures/20240927_130059_l.jpg';
// import img28 from '../assets/detailsPageGalleryMaramures/20241212_095951_p.jpg';
// import img29 from '../assets/detailsPageGalleryMaramures/IMG_20201014_103359_607_p.jpg';
// import img30 from '../assets/detailsPageGalleryMaramures/IMG_20220709_092253_296_p.jpg';
// import img31 from '../assets/detailsPageGalleryMaramures/IMG_20230914_111706_499_p.jpg';
// import img32 from '../assets/detailsPageGalleryMaramures/P1030376_l.JPG';
// import img33 from '../assets/detailsPageGalleryMaramures/Wooden-Church-in-Surdesti-1_p.jpg';

// // Build galleryImages array with orientation based on filename suffix
// const galleryImages = [
//   { src: img01, alt: '', orientation: 'landscape' },
// //   { src: img02, alt: '', orientation: 'portrait' },
//   { src: img03, alt: '', orientation: 'landscape' },
//   { src: img04, alt: '', orientation: 'portrait' },
// //   { src: img05, alt: '', orientation: 'landscape' },
//   { src: img06, alt: '', orientation: 'portrait' },
//   { src: img07, alt: '', orientation: 'portrait' },
//   { src: img08, alt: '', orientation: 'portrait' },
//   { src: img09, alt: '', orientation: 'landscape' },
//   { src: img10, alt: '', orientation: 'portrait' },
//   { src: img11, alt: '', orientation: 'landscape' },
//   { src: img12, alt: '', orientation: 'portrait' },
//   { src: img13, alt: '', orientation: 'landscape' },
//   { src: img14, alt: '', orientation: 'portrait' },
//   { src: img15, alt: '', orientation: 'landscape' },
//   { src: img16, alt: '', orientation: 'portrait' },
//   { src: img17, alt: '', orientation: 'landscape' },
//   { src: img18, alt: '', orientation: 'landscape' },
//   { src: img19, alt: '', orientation: 'landscape' },
//   { src: img20, alt: '', orientation: 'landscape' },
//   { src: img21, alt: '', orientation: 'landscape' },
//   { src: img22, alt: '', orientation: 'landscape' },
//   { src: img23, alt: '', orientation: 'portrait' },
//   { src: img24, alt: '', orientation: 'portrait' },
//   { src: img25, alt: '', orientation: 'portrait' },
//   { src: img26, alt: '', orientation: 'landscape' },
//   { src: img27, alt: '', orientation: 'landscape' },
//   { src: img28, alt: '', orientation: 'portrait' },
//   { src: img29, alt: '', orientation: 'portrait' },
//   { src: img30, alt: '', orientation: 'portrait' },
//   { src: img31, alt: '', orientation: 'portrait' },
//   { src: img32, alt: '', orientation: 'landscape' },
//   { src: img33, alt: '', orientation: 'portrait' },
// ];

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
