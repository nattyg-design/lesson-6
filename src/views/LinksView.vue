<script setup lang="ts">
import { onMounted } from 'vue'

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
    <div class="card">
      <img
        class="avatar"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=240&h=240&fit=crop&crop=face"
        alt="Tabby cat"
      />
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

.card {
  background: rgba(240, 230, 255, 0.85);
  border: 1px solid rgba(180, 140, 230, 0.5);
  box-shadow: 0 8px 32px rgba(140, 100, 200, 0.25), 0 2px 8px rgba(0, 0, 0, 0.08);
}

:global(body.dark) .card {
  background: rgba(30, 24, 50, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 20px rgba(140, 100, 200, 0.2), 0 0 0 1px rgba(180, 150, 230, 0.3);
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
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  text-align: center;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  letter-spacing: 0.02em;
  color: #4a2d7a;
  background: rgba(220, 195, 255, 0.6);
  border: 2px solid rgba(140, 100, 200, 0.6);
  box-shadow: 0 4px 14px rgba(120, 80, 180, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.18s ease,
    color 0.18s ease;
}

.link-btn:hover {
  background: rgba(140, 100, 210, 0.85);
  border-color: rgba(140, 100, 210, 0.9);
  color: #ffffff;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 24px rgba(100, 70, 160, 0.4);
}

.link-btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(100, 70, 160, 0.25);
}

:global(body.dark) .link-btn {
  color: #d8c8f0;
  background: rgba(40, 30, 65, 0.6);
  border-color: rgba(160, 120, 220, 0.4);
  box-shadow: 0 4px 14px rgba(60, 40, 120, 0.3);
}

:global(body.dark) .link-btn:hover {
  background: rgba(100, 70, 160, 0.85);
  border-color: rgba(160, 120, 220, 0.9);
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(80, 50, 140, 0.5);
}

:global(body.dark) .link-btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(80, 50, 140, 0.3);
}
</style>
