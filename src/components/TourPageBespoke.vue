<template>
  <TourPageHeroSection
  title="Your Dream Romanian Adventure"
  description="Design your perfect trip across Romania - tailored to your interests, pace, and travel style."
  imageName="bespoke-title-img"
/>

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <div class="activity-details-intro">
        <h2>Your Vision, Your Journey</h2>
        <p>At the heart of every great adventure is a story waiting to unfold. Our bespoke tours are crafted around your unique travel aspirations, whether you dream of wandering through medieval castles, discovering hidden villages, or experiencing authentic local traditions.</p>
        
        <div class="spacer"></div>
        
        <div class="highlights-grid">
          <div class="highlight-item">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlight-icon">
                <path d="m12.99 6.74 1.93 3.44"/>
                <path d="M19.136 12a10 10 0 0 1-14.271 0"/>
                <path d="m21 21-2.16-3.84"/>
                <path d="m3 21 8.02-14.26"/>
                <circle cx="12" cy="5" r="2"/>
              </svg>
            </div>
            <h3>Fully Customized</h3>
            <p>Every detail tailored to your preferences, pace, and interests</p>
          </div>
          <div class="highlight-item">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlight-icon">
                <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/>
                <circle cx="12" cy="8" r="2"/>
                <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>
              </svg>
            </div>
            <h3>Local Expertise</h3>
            <p>Benefit from our deep knowledge of Romania's hidden gems</p>
          </div>
          <div class="highlight-item">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="highlight-icon">
                <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/>
                <circle cx="12" cy="8" r="2"/>
                <path d="M12 10v12"/>
                <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/>
                <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/>
              </svg>
            </div>
            <h3>Authentic Experiences</h3>
            <p>Connect with local communities and traditions</p>
          </div>
        </div>
      </div>  
    </div>
  </section>

  <ContactSection title="Share your travel dreams with us!" />

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
import ContactSection from './ContactSection.vue';
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
  padding: 4rem 2rem;
  color: var(--color-text-dark);
}

.activity-details-container {
  max-width: 90ch;
  margin: 0 auto;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.7;
}

.activity-details-intro {
  text-align: left;
  color: var(--color-text-dark);
}

.activity-details-intro h2 {
  font-size: clamp(1.6rem, 5vw, 2rem);
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.activity-details-intro p {
  margin-bottom: 1.5rem;
  /* max-width: 800px; */
  margin-left: auto;
  margin-right: auto;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.highlights-grid::-webkit-scrollbar {
  height: 6px;
}

.highlights-grid::-webkit-scrollbar-track {
  background: transparent;
}

.highlights-grid::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border-radius: 3px;
}

.highlight-item {
  background: var(--color-background-light);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* .highlight-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
} */

.highlight-item h3 {
  color: var(--color-primary);
  font-size: 1.4rem;
  margin: 1.2rem 0 0.8rem;
  font-weight: 600;
}

.highlight-icon {
  width: 40px;
  height: 40px;
  color: var(--color-primary);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(var(--color-primary-rgb), 0.1);
  margin: 0 auto;
}

.highlight-item p {
  color: var(--color-text-dark);
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
}

.highlight-item h3 {
  text-align: center;
}

.spacer {
  height: 2rem;
  display: block;
}

@media (max-width: 1024px) {
  .highlights-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 1.5rem;
  }
}

@media (max-width: 800px) {
  .activity-details-section {
    padding: 2rem 0rem;
  }
  .activity-details-container {
    padding: 0 1.5rem;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }
}

.contact-section {
  background: var(--color-background-light);
}

</style>
