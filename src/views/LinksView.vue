<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark', isDark.value)
  document.body.classList.toggle('light', !isDark.value)
}

onMounted(() => {
  document.body.classList.add('light')
})

const links = [
  { label: 'Portfolio', url: '#' },
  { label: 'Dribbble', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'Email', url: '#' },
]

function openLink(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="links-page">
    <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ isDark ? '☀️' : '🌙' }}
    </button>

    <div class="card">
      <div class="avatar"></div>
      <h1 class="name">Natalia Gorelova</h1>
      <p class="tagline">Developer · Designer · Creator</p>

      <div class="links">
        <button
          v-for="link in links"
          :key="link.label"
          class="link-btn"
          @click="openLink(link.url)"
        >
          {{ link.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.links-page {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.theme-toggle {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--toggle-bg-light);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

:global(body.dark) .theme-toggle {
  background: var(--toggle-bg-dark);
}

.card {
  width: 100%;
  backdrop-filter: blur(12px);
  border-radius: var(--radius);
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: background var(--transition), box-shadow var(--transition);
}

@media (min-width: 480px) {
  .card {
    padding: 2.5rem 2rem;
  }
}

:global(body.light) .card {
  background: var(--card-bg-light);
  border: 1px solid rgba(180, 160, 210, 0.3);
  box-shadow: 0 8px 40px rgba(140, 110, 190, 0.25), 0 2px 8px rgba(0, 0, 0, 0.06);
}

:global(body.dark) .card {
  background: var(--card-bg-dark);
  border: 1px solid rgba(120, 90, 170, 0.3);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c9a7eb, #a7c4eb, #ebafd4);
  margin-bottom: 0.5rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  transition: color var(--transition);
}

:global(body.light) .tagline {
  color: var(--text-muted-light);
}

:global(body.dark) .tagline {
  color: var(--text-muted-dark);
}

.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 0.5rem;
}

.link-btn {
  display: block;
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: var(--radius);
  text-align: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition:
    background var(--transition),
    border-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
  border: 1px solid transparent;
}

:global(body.light) .link-btn {
  background: var(--btn-bg-light);
  border-color: var(--btn-border-light);
  color: #ffffff;
}

:global(body.light) .link-btn:hover {
  background: var(--btn-hover-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(140, 100, 190, 0.4);
}

:global(body.dark) .link-btn {
  background: var(--btn-bg-dark);
  border-color: var(--btn-border-dark);
  color: #f0e8f8;
}

:global(body.dark) .link-btn:hover {
  background: var(--btn-hover-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(100, 70, 160, 0.45);
}
</style>
