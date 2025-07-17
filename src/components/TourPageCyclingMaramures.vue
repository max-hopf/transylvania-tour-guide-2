<template>
  <TourPageHeroSection
  title="Discover Maramureș by Bike"
  description="Explore the rolling hills of Maramureș on a bike tour, where you'll experience the authentic charm of this region."
  imageName="maramures-cycling-title-img"
/>
  <TourPageEssentialsSection
    duration="8 hours"
    price="from ? € / person"
    groupSize="2 – 7 participants"
  />

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <div class="activity-details-intro">
        <h2>Ready to ride?</h2>
        <p>Join us for a scenic cycling adventure through the heart of Maramureș — a land of rolling hills, pristine rivers, and timeless traditions. Pedal your way through charming villages, ancient forests, and open meadows while discovering the region’s rich cultural heritage. This tour is the perfect mix of active exploration, local experiences, and breathtaking views — ideal for cycling enthusiasts and curious travelers alike.
        </p>
  
      </div>
      <h2>What you need to know</h2>
    </div>
  </section>

  <ProgressiveDisclosureInterface :tabs="cyclingMaramuresTabs" force-accordion class="cycling-accordion" />
  <TourPageGallery :images="galleryImages" galleryName="transylvania" />

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

const cyclingMaramuresTabs = [
  {
    label: 'Trip Overview',
    content: `
      <p>This is a private guided cycling tour, starting from the picturesque village of Breb. Pick-up and drop-off from nearby villages are available upon request.</p>
    `
  },
  {
    label: 'Route & Duration',
    content: `
      <ul>
        <li><strong>Distance:</strong> Up to 40 km</li>
        <li><strong>Elevation gain:</strong> Up to 500 meters</li>
        <li><strong>Duration:</strong> Up to 8 hours</li>
        <li><strong>Terrain:</strong> A mix of gravel, dirt, and tarmac roads</li>
        <li><strong>Route:</strong> Customizable based on your interests and biking experience</li>
      </ul>
    `
  },
  {
    label: "What's Included",
    content: `
      <ul>
        <li>Well-maintained bikes for all sizes, regularly serviced</li>
        <li>Helmets for your safety</li>
        <li>A traditional Maramureș lunch at a local farm</li>
        <li>All applicable entrance fees</li>
      </ul>
    `
  },
  {
    label: 'Good to Know',
    content: `
      <ul>
        <li>Please provide each rider's height and weight when booking</li>
        <li>A good fitness level is recommended, though prior biking experience is not required</li>
        <li>Child seats are available upon request</li>
      </ul>
    `
  },
  {
    label: 'Availability',
    content: `
      <p>The tour runs from May to November</p>
    `
  },
  {
    label: 'What to Bring',
    content: `
      <ul>
        <li>Comfortable clothing and shoes suitable for biking</li>
        <li>A sense of adventure!</li>
      </ul>
    `
  },
  {
    label: 'Itinerary',
    content: `
     <h3>🚴‍♀️ Bike to a UNESCO Wooden Church</h3>
        <p>Your journey begins with a gentle descent from Breb to Desești, home to one of the most remarkable UNESCO-listed wooden churches in the region. On the way, we pass through the quaint village of Mara, then cross the valley via a scenic gravel path — once a railway line during the Austro-Hungarian era. This part of the ride blends natural beauty with a touch of history, setting the tone for an unforgettable experience.</p>

        <h3>🥘 A Taste of Maramureș: Brandy & a Traditional Meal</h3>
        <p>After our cultural stop, we'll pause for a homemade meal made with fresh, locally sourced ingredients at a welcoming farmstead. To top it off, you'll get to try horincă, the area's signature plum brandy — a true Maramureș tradition. We'll also take time to cool off by a nearby mountain stream, soaking in the serenity before continuing our ride.</p>

        <h3>🌄 Panoramic Views & Bucolic Landscapes</h3>
        <p>As we head toward the salt lakes of Ocna Șugatag, the scenery becomes even more spectacular. Think rolling hills, wildflower meadows, and haystacks as far as the eye can see. Keep an eye out for The Rooster's Comb, a striking volcanic formation, and on clear days, you may even catch a glimpse of Zakarpattia, just across the Ukrainian border.</p>

        <h3>🤝 Make Memories — and New Friends</h3>
        <p>If you love biking and discovering new places, you're in for a treat. There's no better way to experience the soul of Maramureș than on two wheels, surrounded by nature, history, and warm local hospitality. We ride at a relaxed pace, with plenty of time for photos, water breaks, and conversation. By the end of the day, you won't just leave with great memories — you may also leave with a few new friends. 😊</p>
    `
  }
];

</script>

<style scoped>
.activity-details-section {
  background: var(--color-background-light);
  padding: 4rem 2rem 1rem 2rem;
  color: var(--color-text-dark);
  padding-top: 0.5rem;
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

.activity-details-intro h2,
.activity-details-container h2{
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 600;
  margin-top: 2.25rem;
  margin-bottom: 0.75rem;
}

.activity-details-intro h3 {
  font-size: clamp(1.5rem, 2vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-top: 2.25rem;
}

.activity-details-intro p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.activity-details-intro ul {
  font-size: 1rem;
  margin-bottom: 1rem;
  list-style-type: disc;
  margin-block-start: 0.5em;
  margin-block-end: 2em;
  padding-inline-start: 0px;
}

.activity-details-intro li {
  font-size: 1rem;
}

.activity-details-intro a {
  font-size: 1rem;
}

.activity-details-intro a:hover {
  text-decoration: underline;
}

:deep(.tabs),
:deep(.tab-content) {
    display: none;
  }
:deep(.accordion) {
    border: 2px solid var(--color-border-light-mute);
  }
:deep(.accordion-item) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    background: var(--color-background-light);
    border-bottom: 1px solid var(--color-border-light-mute);
    overflow: hidden;
    transition: box-shadow 0.3s;
  }
:deep(.accordion-item:last-child) {
    border-bottom: none;
  }
:deep(.accordion-header) {
    width: 100%;
    text-align: left;
    padding: 1rem 1.5rem;
    background: var(--color-background-light);
    border: none;
    outline: none;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-dark);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    transition:
      background 0.2s,
      color 0.2s;
  }
:deep(.accordion-header.active),
:deep(.accordion-header:focus) {
    background: var(--color-background-light);
    color: var(--color-text-highlight, #ffa800);
  }
:deep(.accordion-arrow) {
    margin-left: 0.5rem;
    font-size: 1.25em;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: #888;
  }
:deep(.accordion-arrow.open) {
    transform: rotate(180deg);
    color: var(--color-text-highlight, #ffa800);
  }
:deep(.accordion-content) {
    padding: 0rem 1.5rem 2rem 1.5rem;
    background: var(--color-background-light);
    color: var(--color-text-dark);
    font-size: 1rem;
    line-height: 1.6;
    animation: accordion-fade-in 0.22s;
    word-break: break-word;
    text-align: left;
  }
:deep(.accordion-icon) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
:deep(.lucide) {
    height: 1.5rem;
    width: 1.5rem;
  }
  @keyframes accordion-fade-in {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :deep(.tabbed-interface-section) {
        padding-bottom: 1.5rem;
    }
@media (min-width: 38rem) {
    :deep(.tabbed-interface-section) {
        padding-left: 0;
        padding-right: 0;
    }
}




</style>
