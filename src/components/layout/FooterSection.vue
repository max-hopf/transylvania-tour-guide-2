<template>
  <footer class="footer-section" id="footer">
    <div class="footer-columns">
      <!-- Quick Links -->
      <div class="footer-col">
        <h4 class="footer-title">Quick Links</h4>
        <ul class="footer-links">
          <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
          <li><router-link to="/terms-and-conditions">Terms and Conditions</router-link></li>
          <!-- <li><a href="#faq">FAQ</a></li> -->
        </ul>
      </div>

      <!-- Get in Touch -->
      <div class="footer-col">
        <h4 class="footer-title">Get In Touch</h4>
        <ul class="footer-contact">
          <li class="footer-contact-item">
            <span class="footer-contact-text">
              <!-- <span class="footer-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
      </span> -->
              VILLAGE COFFEE & TRAVEL SRL
            </span>
          </li>
          <li class="footer-contact-item">
            <a
              href="https://maps.app.goo.gl/XwEmmhgMLhaBuHTj7"
              class="footer-contact-link"
              target="_blank"
              rel="noopener"
              aria-label="Open address in Google Maps"
            >
              <span class="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pin-icon"
                >
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              Breb Village N. 189A, Maramures, Romania
            </a>
          </li>
          <li class="footer-contact-item">
            <a
              href="mailto:transylvanica@gmail.com"
              class="footer-contact-link"
              aria-label="Send email to transylvanica@gmail.com"
            >
              <span class="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail-icon"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              transylvanica@gmail.com
            </a>
          </li>
          <li class="footer-contact-item">
            <a
              href="tel:+40740364842"
              class="footer-contact-link"
              aria-label="Call +40-740-364-842"
            >
              <span class="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone-icon"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </span>
              +40-740-364-842
            </a>
          </li>
        </ul>
      </div>

      <!-- ANPC & Payments -->
      <div class="footer-col">
        <h4 class="footer-title">ANPC & Payments</h4>
        <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener" class="anpc-logo-link">
          <img
            src="/images/footer-images/anpc-sal.svg"
            alt="ANPC Alternative Dispute Resolution"
            class="anpc-logo"
          />
        </a>
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" class="anpc-logo-link">
          <img
            src="/images/footer-images/anpc-sol.svg"
            alt="ANPC SOL - Online Dispute Resolution"
            class="anpc-logo"
          />
        </a>
        <!-- <ul class="footer-anpc">
          <li><a href="https://anpc.ro/ce-este-anpc/" target="_blank" rel="noopener">Client Rights</a></li>
          <li><a href="https://anpc.ro/obligatii-clienti/" target="_blank" rel="noopener">Client Obligations</a></li>
        </ul> -->
        <div class="footer-payments">
          <img src="/images/footer-images/Visa.svg" alt="Visa" class="payment-icon" />
          <img
            src="/images/footer-images/Mastercard.svg"
            alt="Mastercard"
            class="payment-icon"
          />
          <img src="/images/footer-images/PayPal.svg" alt="PayPal" class="payment-icon" />
          <img
            src="/images/footer-images/Google-Pay.svg"
            alt="Google Pay"
            class="payment-icon"
          />
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-col footer-bottom-left">
        <span class="footer-copyright">National Tour Guide License N. 5164/2016</span>
      </div>
      <div class="footer-bottom-col footer-bottom-center">
        <span class="footer-made">Proudly Made in Transylvania</span>
      </div>

      <div class="footer-bottom-col footer-bottom-right">
        <span class="footer-copyright">Copyright © 2025 Transylvania Tour Guide</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for static footer
</script>

<style scoped>
.footer-section {
  background: var(--color-background-dark-soft);
  color: var(--color-text-light);
  padding-top: 2rem;
  /* font-family: 'Montserrat', Arial, sans-serif; */
}
.footer-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: space-between;
  max-width: 84rem;
  margin: 0 auto;
}
.footer-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 8rem;
  flex: 1 1 10rem;
  text-align: center;
}
.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-highlight);
}
.footer-links,
.footer-contact,
.footer-anpc {
  list-style: none;
  padding: 0;
  margin: 0 0 0.7rem 0;
}
.footer-links li,
.footer-contact li,
.footer-anpc li {
  margin-bottom: 0.6rem;
  font-size: 1rem;
}
.footer-links a,
.footer-anpc a {
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.18s;
}
.footer-links a:hover,
.footer-anpc a:hover {
  color: var(--color-text-highlight);
}
.footer-icon {
  display: flex;
  font-size: 1.2em;
  margin-right: 0rem;
}
.footer-contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}
.footer-contact-text {
  color: var(--color-text-light);
  font-weight: 500;
}
.footer-contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.25s;
}
.footer-contact-link:hover,
.footer-contact-link:focus {
  color: var(--color-text-highlight);
  outline: none;
}
.anpc-logo {
  width: 100%;
  max-width: 16rem; /* Capped at 256px */
  height: auto;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  display: block;
  transition: transform 0.2s;
}
.anpc-logo:hover {
  transform: scale(1.05);
}
.anpc-logo-link {
  width: 100%;
  max-width: 16rem; /* Capped at 256px */
  height: auto;
}
.footer-payments {
  width: 100%;
  max-width: 16rem; /* Match the logo's max-width */
  margin-top: 0.4rem;
  display: flex;
  flex-wrap: wrap; /* Allow icons to wrap */
  justify-content: space-around;
  gap: 0.8em;
}
.payment-icon {
  width: clamp(3.3rem, 2vw, 23.3rem);
  aspect-ratio: 3 / 2;
  object-fit: contain;
  background: var(--color-background-light);
  border-radius: 0.5rem;
  padding: 2px 2px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}
.footer-bottom {
  background-color: var(--color-background-dark);
  margin-top: 2rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
  font-size: 1rem;
  color: var(--color-text-light);
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.footer-bottom-col {
  flex: 1 1 0;
  min-width: 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  height: 100%;
}
.footer-bottom-left {
  justify-content: flex-start;
  text-align: left;
}
.footer-bottom-center {
  justify-content: center;
  text-align: center;
}
.footer-bottom-right {
  justify-content: flex-end;
  text-align: right;
}
.footer-made {
  font-size: 1rem;
  color: #fff;
}
@media (max-width: 75rem) {
  .footer-bottom {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}
@media (max-width: 56rem) {
  .footer-columns {
    flex-direction: column;
    gap: 2.2rem;
    align-items: center;
    text-align: center;
  }
  .footer-col {
    width: 100%;
    margin-bottom: 1.1rem;
  }
}
@media (max-width: 40rem) {
  .footer-section {
    padding-top: 2rem;
  }
  .footer-title {
    font-size: 1rem;
  }
  .footer-bottom {
    font-size: 0.9rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-align: center;
  }
  .footer-bottom-col {
    justify-content: center !important;
    text-align: center !important;
    width: 100%;
    padding: 0.3rem 0;
  }
}
</style>
