<template>
  <div class="home-page-content">
    <h1 class="main-title">Welcome to Your Transylvania Adventure</h1>
    <p class="intro-text">
      Your journey into the heart of Romania begins here. Explore ancient castles, wander through
      medieval towns, and discover the breathtaking beauty of the Carpathian Mountains. Our expert
      guides are dedicated to providing you with an unforgettable experience, blending history,
      culture, and natural wonders into a seamless adventure.
    </p>

    <ProgressiveDisclosureInterface :tabs="tourTabs" />
    <OurToursSection />

    <div class="extra-content">
      <h2>Why Choose Our Tours?</h2>
      <p>
        We believe in authentic travel experiences. Forget cookie-cutter itineraries; we craft
        journeys that connect you with the real Transylvania. Our small group sizes ensure a
        personal touch, allowing for spontaneous detours to local markets or conversations with
        artisans in their workshops. We handle all the logistics, from comfortable transport to
        charming, hand-picked accommodations, so you can focus on soaking in the magic of your
        surroundings.
      </p>

      <p>
        Our guides are not just experts in history and folklore; they are passionate storytellers
        who bring the legends of Transylvania to life. Whether you're tracing the footsteps of
        Dracula, marveling at the architecture of Saxon villages, or hiking through pristine
        forests, you'll be in the hands of a knowledgeable and friendly local who is excited to
        share their home with you.
      </p>

      <h2>Our Commitment to Sustainable Travel</h2>
      <p>
        We are dedicated to preserving the beauty and culture of Transylvania for generations to
        come. We partner with local businesses, support community-led initiatives, and practice
        responsible tourism to ensure our tours have a positive impact. When you travel with us,
        you're not just a tourist; you're a valued guest contributing to the local economy and the
        conservation of this unique heritage.
      </p>

      <p>
        From the moment you book until you say your goodbyes, we are committed to providing
        exceptional service and a journey that exceeds your expectations. Get ready for an adventure
        that will leave you with lasting memories and a deep appreciation for the enchanting land of
        Transylvania.
      </p>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { ref } from 'vue'
import ProgressiveDisclosureInterface from './ProgressiveDisclosureInterface.vue'
import TourCard from './TourCard.vue'
import OurToursSection from './OurToursSection.vue'
import FooterSection from './FooterSection.vue'

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
.home-page-content {
  /* max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem 1rem;
  color: #333; */
}

.main-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.intro-text {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.extra-content {
  margin-top: 4rem;
  text-align: left;
}

.extra-content h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eaecef;
  color: #2c3e50;
}

.extra-content p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
</style>
