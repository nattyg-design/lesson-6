<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
</script>

<template>
  <div class="app-shell">
    <nav class="tabs">
      <RouterLink to="/" class="tab">Home</RouterLink>
      <RouterLink to="/about" class="tab">About Me</RouterLink>
      <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.app-shell {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tabs {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.tabs {
  background: rgba(220, 195, 255, 0.45);
  border: 1px solid rgba(180, 140, 230, 0.5);
  box-shadow: 0 2px 12px rgba(140, 100, 200, 0.2);
}

:global(body.dark) .tabs {
  background: rgba(30, 24, 50, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.tab {
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  transition: color var(--transition), background var(--transition);
  color: var(--text-muted-light);
}

:global(body.dark) .tab {
  color: var(--text-muted-dark);
}

.tab.router-link-exact-active {
  color: var(--text-light);
  background: rgba(255, 255, 255, 0.7);
}

:global(body.dark) .tab.router-link-exact-active {
  color: var(--text-dark);
  background: rgba(255, 255, 255, 0.1);
}

.tab:hover {
  opacity: 0.8;
}

.theme-toggle {
  margin-left: auto;
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition), background var(--transition);
  flex-shrink: 0;
}

.theme-toggle:hover {
  transform: scale(1.2) rotate(15deg);
}
</style>
