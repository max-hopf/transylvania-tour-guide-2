<template>
  <section class="testimonials-section fade-slide-init fade-slide-left" id="testimonials" ref="testimonialsSectionRef">
    <div class="testimonials-label">
      Testimonials <span class="testimonials-label-line"></span>
    </div>
    <h2 class="testimonials-title">What people are Saying about us</h2>
    <div class="testimonials-content">
      <!-- <div class="testimonial-avatars">
        <img
          v-for="(t, idx) in testimonials"
          :key="idx"
          :src="t.avatar"
          :alt="'Testimonial avatar ' + (idx+1)"
          class="avatar"
          :class="{ active: idx === selectedIdx }"
          @click="selectTestimonial(idx)"
          style="cursor:pointer"
        />
      </div>
      <div class="testimonial-main">
        <p class="testimonial-quote">
          {{ testimonials[selectedIdx].text }}
        </p>
        <div class="testimonial-author">
          <img :src="testimonials[selectedIdx].avatar" class="author-avatar" alt="Testimonial author" />
          <span class="author-name">{{ testimonials[selectedIdx].name }}</span>
        </div>
      </div> -->
      <a class="tripadvisor-link" href="https://www.tripadvisor.com/Attraction_Review-g298474-d10182481-Reviews-Transylvania_Tour_Guide-Cluj_Napoca_Cluj_County_Northwest_Romania_Transylvania.html" target="_blank" rel="noopener">
        <span class="tripadvisor-text">See more reviews on</span>
        <span class="tripadvisor-logo" aria-label="TripAdvisor logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5000 1000" style="display:block; margin:0 auto; height:48px; width:auto; max-width:100%;">
            <path fill="currentColor" d="M4806.79,746.44a25,25,0,1,0,25,25A25,25,0,0,0,4806.79,746.44Zm0,46.08a21.08,21.08,0,1,1,21.08-21.07A21.09,21.09,0,0,1,4806.79,792.52Zm8.12-25.33c0-4.55-3.25-7.25-8-7.25h-8v22.77h3.94v-8.26h4.26l4.13,8.26h4.23L4811,773.6A6.59,6.59,0,0,0,4814.91,767.19Zm-8.16,3.78h-3.87v-7.55h3.87c2.63,0,4.23,1.33,4.23,3.77S4809.38,771,4806.75,771ZM569.17,605.31a97.95,97.95,0,1,1-97.94-97.94A97.94,97.94,0,0,1,569.17,605.31Zm552.18,0a97.95,97.95,0,1,1-97.95-97.94A97.95,97.95,0,0,1,1121.35,605.31ZM1099,304.09C998.87,235.77,878,195.89,747.32,195.89a619.47,619.47,0,0,0-351,108.2H195.89l90.17,98.12a274.9,274.9,0,0,0-89.89,203.66c0,152.19,123.38,275.57,275.57,275.57A274.54,274.54,0,0,0,659,808l88.34,96.12L835.66,808a274.54,274.54,0,0,0,187.23,73.4c152.19,0,275.68-123.38,275.68-275.57a274.9,274.9,0,0,0-89.89-203.66l90.17-98.12ZM471.74,792.36c-103,0-186.49-83.49-186.49-186.49s83.5-186.49,186.49-186.49,186.5,83.49,186.5,186.49S574.74,792.36,471.74,792.36ZM747.37,600.5c0-122.73-89.26-228-207-273.06a538.15,538.15,0,0,1,413.93,0C836.62,372.49,747.37,477.78,747.37,600.5Zm462,5.37c0,103-83.5,186.49-186.49,186.49s-186.5-83.49-186.5-186.49,83.5-186.49,186.5-186.49S1209.38,502.87,1209.38,605.87Zm654.11-173.45h43.37v85.84h-50.75c-39.09,0-64.17,19.18-64.17,58.28V792.36h-92.78V432.42h92.78V492.9C1800.05,450.12,1829.56,432.42,1863.49,432.42Zm186.35-85.59a56.06,56.06,0,0,1-112.12,0c0-31.72,24.34-56.8,56.06-56.8S2049.84,315.11,2049.84,346.83Zm-102.33,85.59H2040V792.36h-92.53Zm347.35-6.08a179,179,0,0,0-109.22,36.52V432.42h-92.52V898h92.52V761.92a179,179,0,0,0,109.22,36.52c102.76,0,186-83.3,186-186.05S2397.62,426.34,2294.86,426.34Zm-8.15,287.12a101.07,101.07,0,1,1,101.07-101.07A101.07,101.07,0,0,1,2286.71,713.46Zm1890.57-34.8c0,69.4-59.54,119.78-141.57,119.78-85.12,0-144.57-51.57-144.57-125.42v-2h90.54v2c0,30.82,22,51.53,54.78,51.53,31.42,0,52.53-15.33,52.53-38.14,0-21.61-14.61-33.69-53.89-44.56l-51.71-14.1c-54.34-14.71-85.5-50.12-85.5-97.14,0-60.42,57-104.27,135.57-104.27,79.3,0,132.58,43.88,132.58,109.21v2.05h-85.3v-2.05c0-22.18-20.77-39.55-47.28-39.55-27.84,0-47.28,12.78-47.28,31.09,0,18.76,13.84,29.66,49.36,38.91l54,14.81C4162.05,600.16,4177.28,644.7,4177.28,678.66Zm-1368-215.8A179,179,0,0,0,2700,426.34c-102.76,0-186.05,83.3-186.05,186.05S2597.26,798.44,2700,798.44a179,179,0,0,0,109.22-36.52v30.44h92.52V432.42h-92.52Zm0,149.54a101.07,101.07,0,1,1-101.07-101.08A101.08,101.08,0,0,1,2809.24,612.4ZM3236,462.86a179,179,0,0,0-109.22-36.52c-102.75,0-186.05,83.3-186.05,186.05s83.3,186.05,186.05,186.05A179,179,0,0,0,3236,761.92v30.44h92.53V304.3H3236Zm-101.06,250.6A101.07,101.07,0,1,1,3236,612.39,101.07,101.07,0,0,1,3134.89,713.46Zm623.34-281h92.53V792.36h-92.53Zm102.33-85.59a56.06,56.06,0,1,1-112.12,0c0-31.72,24.34-56.8,56.06-56.8S3860.56,315.11,3860.56,346.83Zm530.71,79.51c-102.75,0-186.05,83.3-186.05,186.05s83.3,186.05,186.05,186.05,186-83.3,186-186.05S4494,426.34,4391.27,426.34Zm0,287.12a101.07,101.07,0,1,1,101.07-101.07A101.06,101.06,0,0,1,4391.27,713.46ZM1744.55,386.87H1613.14V792.36h-92.22V386.87H1389.51V304.3h355Zm1877.76,45.55h97.21L3595.31,792.36H3484L3360.47,432.42h97.2L3540,693.79Zm1162.19,0h43.37v85.84h-50.75c-39.09,0-64.18,19.18-64.18,58.28V792.36h-92.77V432.42h92.77V492.9C4721.06,450.12,4750.57,432.42,4784.5,432.42Z"/>
          </svg>
        </span>
      </a>
      <div class="tripadvisor-certificate-wrapper">
        <img :src="tripCert" alt="Tripadvisor Certificate of Excellence 2019" class="tripadvisor-certificate-img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import tripCert from '../assets/testimonial-images/tripadvisor-certificate-2019.png';

const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Smith',
    text: 'Amazing experience! The guides were knowledgeable and friendly. Highly recommend for anyone visiting Transylvania.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Emily Johnson',
    text: 'The tours were well organized and we saw breathtaking views. Will definitely book again!'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Michael Brown',
    text: 'A fantastic adventure for the whole family. The wildlife tour was a highlight for us.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    name: 'Caroline Dorothy',
    text: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    name: 'David Lee',
    text: 'Loved every minute! The cycling tour was challenging but rewarding. Great company and beautiful scenery.'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    name: 'Sophia Martinez',
    text: 'The village experience was authentic and heartwarming. We learned so much about local traditions.'
  }
];

const selectedIdx = ref(0);
const selectTestimonial = idx => selectedIdx.value = idx;
const testimonialsSectionRef = ref(null);
let observer = null;

onMounted(() => {
  const el = testimonialsSectionRef.value;
  const triggerAnimation = () => {
    if (el && !el.classList.contains('fade-slide-in')) {
      el.classList.add('fade-slide-in');
    }
  };

  // Check if already visible on mount
  if (el) {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setTimeout(triggerAnimation, 200); // short delay for effect
      return;
    }
  }

  observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        triggerAnimation();
        observer.disconnect();
      }
    },
    { threshold: 0.25 }
  );
  if (el) {
    observer.observe(el);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.testimonials-section {
  background: var(--color-background-light-softer-tone);
  padding: 8rem 0 8rem 0;
  text-align: center;
}
@media (max-width: 900px) {
  .testimonials-section {
    padding: 3rem 0 5rem 0;
  }
  .testimonial-card {
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
  }
}
.testimonials-label {
  font-size: 1.05rem;
  color: var(--color-text-highlight);
  font-weight: 600;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
}
.testimonials-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: var(--color-text-highlight);
  border-radius: 2px;
}
.testimonials-title {
  font-size: 2.1rem;
  font-weight: bold;
  color: var(--color-text-dark);
  margin-bottom: 1.5rem;
  margin-top: 0;
}
.testimonials-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
}
.testimonial-avatars {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px #0001;
  background: #fff;
  opacity: 0.7;
  transition: border-color 0.2s, opacity 0.2s;
}
.avatar.active {
  border-color: var(--color-text-highlight);
  opacity: 1;
}

.testimonial-main {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 2.2rem 2.2rem 1.6rem 2.2rem;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}
.testimonial-quote {
  color: #444;
  font-size: 1.14rem;
  margin-bottom: 1.3rem;
}
.testimonial-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  margin-top: 1.1rem;
}
.author-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px #0001;
}
.author-name {
  font-weight: 700;
  font-size: 1.15rem;
  color: #222;
  margin-top: 0.5rem;
}
.tripadvisor-certificate-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:0;
}
.tripadvisor-certificate-img {
  max-width: 24rem;
  width: 100%;
  height: auto;
  display: block;
}

.tripadvisor-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 1.1rem; */
  margin-top: 1rem;
  text-decoration: none;
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 1.13rem;
  transition: color 0.18s;
}
.tripadvisor-link:hover {
  color: #16b58a;
}
.tripadvisor-logo svg {
  width: 120px;
  height: 48px;
  display: block;
  margin: 0 auto;
  transition: color 0.18s;
}
.tripadvisor-text {
  display: block;
  text-align: center;
  font-size: 1.13rem;
}

@media (max-width: 900px) {
  .testimonials-content {
    gap: 1.3rem;
  }
  .testimonial-avatars {
    gap: 1.3rem;
  }
  .testimonial-main {
    padding: 1.1rem 1rem 1rem 1rem;
  }
}
@media (max-width: 600px) {
  .testimonials-section {
    padding: 3rem 1rem 5rem 1rem;
  }
  .testimonials-title {
    font-size: 1.6rem;
  }
  .testimonial-card {
    font-size: 1rem;
  }
  .testimonial-text {
    font-size: 1rem;
  }
  .author-name {
    font-size: 1rem;
  }
}
</style>
