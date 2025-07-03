<template>
  <TourPageHeroSection
    title="Bukovina Tour from Cluj-Napoca"
    description=""
    imageName="bucovina-title-img"
  />
  <TourPageEssentialsSection
    duration="3 days"
    price="from 590 € / person"
    groupSize="2 – 7 participants"
  />

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <p class="activity-details-intro">
        Bukovina is a picturesque region in northeastern Romania, renowned for its stunning painted monasteries, rich cultural heritage, and beautiful natural landscapes. Often called the “Land of Painted Churches,” Bucovina’s UNESCO World Heritage sites feature vibrant frescoes that depict religious and historical scenes. The region offers a unique blend of history, tradition, and unspoiled nature, making it a captivating destination for travelers seeking authentic Romanian culture and serene countryside.
      </p>
    </div>
  </section>

  <ProgressiveDisclosureInterface :tabs="bucovinaTabs" />

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


// Import all images from detailsPageGalleryBucovina
// import img01 from '../assets/detailsPageGalleryBucovina/1660902684259_l.jpg';
// import img02 from '../assets/detailsPageGalleryBucovina/20230428_174131_p.jpg';
// import img03 from '../assets/detailsPageGalleryBucovina/20230430_171243_l.jpg';
// import img04 from '../assets/detailsPageGalleryBucovina/20230501_100744_l.jpg';
// import img05 from '../assets/detailsPageGalleryBucovina/20230627_102455_l.jpg';
// import img06 from '../assets/detailsPageGalleryBucovina/20240404_174445_p.jpg';
// import img07 from '../assets/detailsPageGalleryBucovina/20240405_111741_p.jpg';
// import img08 from '../assets/detailsPageGalleryBucovina/20240405_111837_p.jpg';
// import img09 from '../assets/detailsPageGalleryBucovina/20240727_190617_p.jpg';
// import img10 from '../assets/detailsPageGalleryBucovina/20240914_162445_l.jpg';
// import img11 from '../assets/detailsPageGalleryBucovina/20240915_170504_p.jpg';
// import img12 from '../assets/detailsPageGalleryBucovina/20241015_100725_p.jpg';

// Build galleryImages array for Bucovina
// const galleryImages = [
//   { src: img01, alt: '', orientation: 'landscape' }, // 1660902684259_l.jpg
//   { src: img02, alt: '', orientation: 'portrait' }, // 20230428_174131_p.jpg
//   { src: img03, alt: '', orientation: 'landscape' }, // 20230430_171243_l.jpg
//   { src: img04, alt: '', orientation: 'landscape' }, // 20230501_100744_l.jpg
//   { src: img05, alt: '', orientation: 'landscape' }, // 20230627_102455_l.jpg
//   { src: img06, alt: '', orientation: 'portrait' }, // 20240404_174445_p.jpg
//   { src: img07, alt: '', orientation: 'portrait' }, // 20240405_111741_p.jpg
//   { src: img08, alt: '', orientation: 'portrait' }, // 20240405_111837_p.jpg
//   { src: img09, alt: '', orientation: 'portrait' }, // 20240727_190617_p.jpg
//   { src: img10, alt: '', orientation: 'landscape' }, // 20240914_162445_l.jpg
//   { src: img11, alt: '', orientation: 'portrait' }, // 20240915_170504_p.jpg
//   { src: img12, alt: '', orientation: 'portrait' }, // 20241015_100725_p.jpg
// ];

const bucovinaTabs = [
  {
    label: `What’s Included`,
    content: `<ul>
      <li>Professional guidance</li>
      <li>2 nights’ accommodation in family-owned traditional guesthouses (all en-suite)</li>
      <li>Half-board meals featuring organic, locally sourced ingredients</li>
      <li>All entrance fees and transportation costs</li>
    </ul>
    `
  },
  {
    label: `Highlights of the Tour`,
    content: `
     <strong>Explore key attractions such as:</strong>
      <ul>
        <li>UNESCO-Painted Monasteries, including Voroneț</li>
        <li>Black pottery in Marginea</li>
        <li>Vama Egg Museum</li>
      </ul><br>
      <strong>Experience Romanian Culture through Slow Travel:</strong><br />
      Immerse yourself in authentic countryside living with stunning landscapes, fresh air, and warm hospitality. Delight in home-grown produce and traditional Romanian dishes.
      If possible, plan your visit to include a Sunday, when locals don their finest folk costumes and attend church.
      `
  },
  {
    label: `Flexibility and Extensions`,
    content: `
    The itinerary is adaptable based on your preferences, weather, and local events. You may extend your trip by one night to deepen your slow travel experience for an additional €195 per person—a rare opportunity to unwind in today’s fast-paced world.
    <br /><br />
    <strong>Additional Information</strong><br />
    The itinerary may be modified on-site depending on weather or local events.
    <br /><br />
    <strong>Departure Options and Booking Details</strong><br />
    While the tour typically begins in Cluj-Napoca, it can also start from different Transylvanian cities, which is easily accessible by train, though Cluj-Napoca is preferred.
    `
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

