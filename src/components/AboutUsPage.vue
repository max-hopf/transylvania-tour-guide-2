<template>
  <TourPageHeroSection
    title="Our Passion for Romania"
    description="Discover the people behind transylvaniatourguide.com - your trusted local experts since 2015"
    imageName="about-us-title-img"
  />

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <div class="activity-details-intro">
        <p>Founded in 2015, transylvaniatourguide.com is a passion-driven project created for those who seek more than just sightseeing — it’s for those who crave the authentic, the meaningful, and the memorable.</p>
        <p>Born from a love for history, culture, and human connection, this initiative was built to offer premium private experiences across Transylvania, Maramures, and Bucovina, tailored for curious travelers who value quality, depth, and a genuine local perspective. It’s a project close to our hearts — and one we’ve poured our time, energy, and soul into.</p>
        <p>Over the years, we’ve journeyed tens of thousands of kilometers, guiding travelers from all corners of the globe and sharing with them the stories, landscapes, and spirit of this extraordinary region. In 2019, our commitment to excellence was recognized with a Certificate of Excellence in Tourism — a milestone that reflects our passion and professionalism.</p>
        <p>We proudly collaborate with local and international travel agencies, hotels, and universities to deliver exceptional, personalized tours that go far beyond the typical tourist path.</p>
        <p>Based in the vibrant city of Cluj-Napoca, we specialize in custom tours throughout Transylvania, Maramureș, and Bucovina — whether your interests lie in heritage, folk traditions, architecture, trekking, or simply discovering breathtaking landscapes. Every tour is carefully crafted to fit your pace, interests, and travel style.</p>
        <p>Let us show you Romania through local eyes. Let us create the kind of experience you’ll remember for a lifetime.</p>
        <p>We warmly invite you to discover the beauty of Transylvania with us — and don’t worry, we promise we won’t bite. 😊</p>
      </div>
    </div>
  </section>

  <section class="guides-section">
    <h2 class="guides-title">Here’s who will guide you</h2>
    <div class="guides-grid">
      <div class="guide-card">
        <img src="../assets/image-originals/about-images/tour-guide-florin.png" alt="Florin" class="guide-photo" />
        <h3 class="guide-name">Florin</h3>
        <!-- <div class="guide-role">FOUNDER</div> -->
        <div class="guide-bio">
          <p>My name is Florin, and I’m proud to be one of the founders of this incredible adventure. With a degree in History from Babeș-Bolyai University in Cluj-Napoca and a deep passion for culture, people, and storytelling, I’ve dedicated my life to sharing the wonders of Romania with curious minds from all over the world.</p>
          <p>Long before I ever imagined myself as a tour guide, I was a traveler at heart. My curiosity and love for discovering new cultures set me on a path that, quite naturally, evolved into a lifelong calling. What began as a personal journey has grown into a mission: to create meaningful, immersive experiences that connect people with history, landscape, and tradition.</p>
          <p>Every tour I lead is a chance to share not only facts and sights, but also the soul of the places we visit — with authenticity, warmth, and a touch of adventure.</p>
        </div>
      </div>
      <div class="guide-card">
        <!-- <img src="../assets/guide2.jpg" alt="Andrei Ionescu" class="guide-photo" /> -->
        <h3 class="guide-name">Andrei Ionescu</h3>
        <!-- <div class="guide-role">CULTURE & HISTORY EXPERT</div> -->
        <div class="guide-bio">
          <p>Andrei specializes in the history and folklore of Transylvania and Maramureș. With a background in ethnology and a love for local traditions, he brings the region’s stories to life. Andrei is fluent in English, Romanian, and German.</p>
        </div>
      </div>
    </div>
  </section>

 

  <FooterSection />
  <BackToTopButton />
</template>

<script setup>
import FooterSection from './FooterSection.vue';
import TourPageHeroSection from './TourPageHeroSection.vue';
import BackToTopButton from './BackToTopButton.vue';
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
  color: var(--color-text-dark);;
}

.activity-details-intro p {
  margin-bottom: 1rem;  
  line-height: 1.8;
  max-width: 75ch;
  margin-left: auto;
  margin-right: auto;
}


.guides-section {
  background: #fff;
  padding: 1.5rem 1rem 4rem 1rem;
  /* margin-top: 2.5rem; */
}
.guides-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  color: #222;
}
.guides-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}
.guide-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  max-width: 65ch;
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  text-align: left;
}
.guide-photo {
  width: 240px;
  height: 240px;
  object-fit: contain;
  border-radius: 50%;
  background-color: #fefefe;
  /* border: 8px solid #000000; */
  margin-bottom: 1.3rem;
  /* box-shadow: 0 2px 8px rgba(0,0,0,0.07); */
}
.guide-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: var(--color-text-dark);
}
.guide-role {
  font-size: 0.96rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--color-text-dark-softer-tone);
  margin-bottom: 1.1rem;
}
.guide-bio {
  font-size: 1rem;
  color: var(--color-text-dark);
  margin-bottom: 0;
}
.guide-bio p {
  margin-bottom: 1rem;
}
@media (max-width: 800px) {
  .guides-grid {
    flex-direction: column;
    gap: 2rem;
  }
  .guide-card {
    max-width: 100%;
  }
}
</style>
