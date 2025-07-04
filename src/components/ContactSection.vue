<template>
  <section class="contact-section" id="contact" ref="contactSectionRef">
  <div class="fade-slide-init" ref="contactAnimRef">

    <div class="contact-label">
      Contact <span class="contact-label-line"></span>
    </div>
    <h2 class="contact-title">Get In Touch With Us</h2>
    <div class="contact-container">
      <!-- <h3 class="contact-subtitle">Using The Form</h3> -->
      <form @submit="sendEmail" class="contact-form">
        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Your Message *</label>
          <textarea id="message" name="message" v-model="message" @input="saveDraft" required rows="5"></textarea>
        </div>
        <div class="form-group consent-group">
          <input type="checkbox" id="consent" v-model="consentGiven" required />
          <label for="consent">
            I consent to having this website store my submitted information so they can respond to my inquiry. 
            <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
          </label>
        </div>
        <div class="form-actions">
          <button type="submit" :disabled="isSubmitting">Send Message</button>
          <span v-if="draftSavedAt" class="draft-info">Draft saved at {{ formattedDraftTime }}</span>
        </div>
      </form>
    </div>
    </div>
</section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

const name = ref('');
const email = ref('');
const message = ref('');
const consentGiven = ref(false);
const draftSavedAt = ref(null);
const isSubmitting = ref(false);

const formattedDraftTime = computed(() => {
  if (!draftSavedAt.value) return '';
  return new Date(draftSavedAt.value).toLocaleTimeString();
});

const contactSectionRef = ref(null);
const contactAnimRef = ref(null);
let observer = null;

onMounted(() => {
  // Animate contact section content (not section) on scroll
  const el = contactAnimRef.value;
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
      setTimeout(triggerAnimation, 200);
    } else if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
    } else {
      // fallback for old browsers
      window.addEventListener('scroll', triggerAnimation, { passive: true });
    }
  }

  // Existing draft restore logic
  const savedMessage = localStorage.getItem('tgDraftMessage');
  const savedName = localStorage.getItem('tgDraftName');
  const savedEmail = localStorage.getItem('tgDraftEmail');
  const savedTimestamp = localStorage.getItem('tgDraftSavedAt');
  if (savedMessage) message.value = savedMessage;
  if (savedName) name.value = savedName;
  if (savedEmail) email.value = savedEmail;
  if (savedTimestamp) draftSavedAt.value = savedTimestamp;
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

function saveDraft() {
  localStorage.setItem('tgDraftMessage', message.value);
  localStorage.setItem('tgDraftName', name.value);
  localStorage.setItem('tgDraftEmail', email.value);
  const now = new Date();
  draftSavedAt.value = now.toISOString();
  localStorage.setItem('tgDraftSavedAt', draftSavedAt.value);
}

async function sendEmail(event) {
  event.preventDefault();
  if (!consentGiven.value) {
    alert('You must consent to data processing to submit this form.');
    return;
  }
  if (isSubmitting.value) return;
  isSubmitting.value = true;
  try {
    await emailjs.sendForm(
      'service_9mup228', // Replace with your EmailJS service ID
      'template_rjfe34l', // Replace with your EmailJS template ID
      event.target,
      '9FJaaHQA-NwdXyMsx', // Replace with your EmailJS user/public key
    );
    localStorage.removeItem('tgDraftMessage');
    localStorage.removeItem('tgDraftName');
    localStorage.removeItem('tgDraftEmail');
    localStorage.removeItem('tgDraftSavedAt');
    name.value = '';
    email.value = '';
    message.value = '';
    alert('Thank you for contacting us! We will get back to you soon.');
  } catch (error) {
    alert('An error occurred while sending your message.');
    console.error('EmailJS error:', error);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.contact-section {
  background: var(--color-background-light-softer-tone);
  padding: 8rem 1rem 8rem 1rem;
  text-align: center;
  scroll-margin-top: -4rem; 
}
.contact-label {
  font-weight: 600;
  color: var(--color-text-highlight);
  font-size: 1rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}
.contact-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: var(--color-text-highlight);
  border-radius: 2px;
}
.contact-title {
  font-size: 1.6rem;
  color: var(--color-text-dark);
  margin-bottom: 1.5rem;
  margin-top: 0.2rem;
  text-align: center;
  font-weight: 700;
}
.contact-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-dark);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
}
.contact-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
}
.divider-line {
  flex: 0 0 48px;
  height: 1px;
  background: var(--color-text-dark);
  min-width: 24px;
  max-width: 64px;
  border: none;
}
.divider-text {
  font-size: 1.2rem;
  color: var(--color-text-dark);
  font-weight: 700;
  padding: 0 0.7em;
  white-space: nowrap;
}

.contact-container {
  max-width: 520px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2.5rem 2rem 2rem 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  font-weight: 500;
  color: var(--color-text-dark);
  text-align: left;
}
.consent-group {
  flex-direction: row;
  align-items: flex-start;
  gap: 0.7rem;
  margin-bottom: 0.9rem;
}
.consent-group input[type="checkbox"] {
  margin-top: 0rem;
  accent-color: #fea700;
  width: 1.5rem;
  height: 1.5rem;
  min-width: 1.5rem;
  min-height: 1.5rem;
  cursor: pointer;
}
.consent-group label {
  font-weight: 400;
  font-size: 1rem;
  color: var(--color-text-dark-mute);
}
.consent-group a {
  color: var(--color-text-highlight);
  text-decoration: underline;
  margin-left: 0.2em;
  font-size: 1rem;
}
.form-group input,
.form-group textarea {
  border: 1px solid var(--color-border-dark-soft);
  border-radius: 2px;
  padding: 0.7rem;
  font-size: 1rem;
  background: var(--color-background-light-softer-tone);
  color: var(--color-text-dark);
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-border-dark-mute);
}
.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-end;
}
button[type="submit"] {
  background: var(--color-text-highlight);
  color: var(--color-text-dark);
  border: none;
  border-radius: 8px;
  padding: 1rem 1.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s;
}
button[type="submit"]:hover {
  background: var(--color-text-highlight);
  filter: brightness(1.1);
}
.draft-info {
  font-size: 1rem;
  color: var(--color-text-dark-pale);
  margin-top: 0.2rem;
}

.alt-contact-list {
  list-style: none;
  padding: 0;
  margin: 2.2rem 0 0 0;
}
.alt-contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  gap: 0.8rem;
}
.alt-contact-icon {
  flex-shrink: 0;
  margin-top: 0.1em;
  margin-right: 0.6rem;
  color: var(--color-text-dark);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.alt-contact-texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.alt-contact-label {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-text-dark);
  margin-bottom: 0.1em;
  line-height: 1.1;
}
.alt-contact-detail,
.alt-contact-link {
  font-size: 1rem;
  color: var(--color-text-dark) !important;
  text-decoration: none;
  margin: 0;
  display: block;
  line-height: 1.24;
  word-break: break-word;
  transition: text-decoration 0.18s, color 0.18s;
}
.alt-contact-link:hover,
.alt-contact-link:focus {
  text-decoration: underline;
  color: var(--color-text-highlight) !important;
}
.alt-contact-list a {
  color: var(--color-text-dark) !important;
  text-decoration: none;
  text-align: left;
}
@media (max-width: 900px) {
  .contact-section {
    padding: 4rem 1rem 4rem 1rem;
    scroll-margin-top: -2rem;
  }
}
@media (max-width: 600px) {
  .contact-container {
    padding: 2.5rem 1rem 2rem 1rem;
  }
  .alt-contact-label,
  .alt-contact-detail,
  .alt-contact-link {
    font-size: 1.04rem;
  }
  .alt-contact-item {
    margin-bottom: 1.5rem;
  }
  button[type="submit"] {
    width: 100%;
  }
}
</style>
