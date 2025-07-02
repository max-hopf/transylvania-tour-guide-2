<script setup>
const props = defineProps({
  duration: { type: String, required: true },
  price: { type: String, required: true },
  groupSize: { type: String, required: true }
});
</script>

<template>
  <section class="essential-info-section">
    <div class="essential-info-row">
      <div class="essential-info-item">
        <span class="icon" aria-label="Calendar" title="Trip Duration">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-calendar-days-icon lucide-calendar-days"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
        </span>
        <span class="label">Trip Duration:</span>
        <span class="value">{{ duration }}</span>
      </div>
      <div class="essential-info-item">
        <span class="icon" aria-label="Price" title="Price">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-banknote-icon lucide-banknote"
          >
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
          </svg>
        </span>
        <span class="label">Price:</span>
        <span class="value">{{ price }}</span>
      </div>
      <div class="essential-info-item">
        <span class="icon" aria-label="Group Size" title="Group Size">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-users-icon lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        </span>
        <span class="label">Group Size:</span>
        <span class="value">{{ groupSize }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.essential-info-section {
  width: 100%;
  background: #23272f;
  color: var(--color-text-light);
  padding: 0rem 0rem 0rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.essential-info-row {
  max-width: 56rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.essential-info-item {
  flex: 1 1 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07); */
}
.essential-info-item .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  width: 1.75rem;
  aspect-ratio: 1;
}
.essential-info-item .icon svg {
  width: 100%;
  height: 100%;
}
.essential-info-item .label {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.2em;
  display: block;
}
.essential-info-item .value {
  font-size: 1rem;
  opacity: 0.95;
  font-weight: 500;
}

@media (max-width: 21rem) {
  .essential-info-row {
  display: flex;
  flex-direction: column;
  }
}
</style>
