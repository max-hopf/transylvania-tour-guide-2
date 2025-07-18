<template>
  <section class="aboutus-page-section">
    <HeaderNavBar />
    <div class="aboutus-container">
      <h1 class="aboutus-title">Meet Your Guides</h1>
      <!-- <p class="aboutus-intro">
        Welcome to Transylvania Tour Guide! We are passionate locals dedicated to sharing the magic of Transylvania, Maramureș, and Bucovina with travelers from around the world.
      </p>
      <div class="aboutus-content">
  <p>
    Meet Maria Popescu, your expert guide to the wonders of Transylvania and Maramureș. With over a decade of experience leading travelers through Romania’s most breathtaking landscapes and historic villages, Maria combines deep local knowledge with a passion for storytelling. Whether you’re hiking the Carpathian trails, exploring medieval castles, or discovering hidden traditions, Maria’s warmth and expertise ensure every journey is unique and memorable. Join her for an adventure that goes beyond sightseeing—immerse yourself in the authentic spirit of Romania with a guide who truly loves sharing her homeland.
  </p>
</div> -->
    </div>
  </section>

  <section class="guides-section">
    <h2 class="guides-title">Here’s who will guide you</h2>
    <div class="guides-grid">
      <div class="guide-card">
        <!-- <img src="../assets/guide1.jpg" alt="Maria Popescu" class="guide-photo" /> -->
        <h3 class="guide-name">Maria Popescu</h3>
        <div class="guide-role">LEAD GUIDE</div>
        <p class="guide-bio">
          Maria is a passionate local with over 10 years of experience guiding travelers through the Carpathians and Transylvania. Her storytelling and deep love for nature make every tour memorable. Maria is also a certified mountain guide and speaks English, Romanian, and French.
        </p>
      </div>
      <div class="guide-card">
        <!-- <img src="../assets/guide2.jpg" alt="Andrei Ionescu" class="guide-photo" /> -->
        <h3 class="guide-name">Andrei Ionescu</h3>
        <div class="guide-role">CULTURE & HISTORY EXPERT</div>
        <p class="guide-bio">
          Andrei specializes in the history and folklore of Transylvania and Maramureș. With a background in ethnology and a love for local traditions, he brings the region’s stories to life. Andrei is fluent in English, Romanian, and German.
        </p>
      </div>
    </div>
  </section>
  <FooterSection />
</template>

<style scoped>
.guides-section {
  background: #fff;
  padding: 3.5rem 1rem 2.5rem 1rem;
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
  background: #f7f9fa;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  max-width: 340px;
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  text-align: left;
}
.guide-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.3rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.guide-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: #222;
}
.guide-role {
  font-size: 0.96rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: #888;
  margin-bottom: 1.1rem;
}
.guide-bio {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0;
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

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
</script>

<style scoped>



.aboutus-page-section {
  position: relative;
  overflow: hidden;
  min-height: 20rem;
  max-height: 20rem
}
.aboutus-page-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/about-us-title.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6) blur(0px);
  z-index: 0;
}
.aboutus-container,
.aboutus-page-section > *:not(style):not(.aboutus-page-section)::before {
  position: relative;
  z-index: 1;
}

.aboutus-container {
  max-width: 800px;
  margin: 1rem auto;
  background: transparent;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2.5rem 2rem 2rem 2rem;
}
.aboutus-title {
  font-size: 2.5rem;
  color:rgb(255, 255, 255);
  margin-bottom: 1.5rem;
  text-align: center;
}
.aboutus-intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #222;
}
.aboutus-content {
  text-align: left;
  color: #222;
}
.aboutus-content h2 {
  color: #e08a1e;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.aboutus-content ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}
.aboutus-content li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}


.header-navbar {
  position: relative;
  top: 0;
  background-color:rgba(15, 15, 15, 0.5);
}

:deep(.site-title),
:deep(.nav-menu a),
:deep(.site-title) {
  color: #fff !important;
}

:deep(.hamburger-menu svg) {
  color: #fff !important;
  stroke: #fff !important;
}

/* When menu is open, make the X icon black */
:deep(.hamburger-menu[aria-expanded="true"] svg:last-of-type) {
  color: #111 !important;
  stroke: #111 !important;
}



</style>
