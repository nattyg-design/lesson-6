<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, watch, nextTick } from 'vue'

const isDark = ref(false)
const route = useRoute()
const navRef = ref<HTMLElement | null>(null)
const pillStyle = ref({ left: '0px', width: '0px' })

function toggleTheme() {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark', isDark.value)
  document.body.classList.toggle('light', !isDark.value)
}

function updatePill() {
  nextTick(() => {
    const nav = navRef.value
    if (!nav) return
    const active = nav.querySelector('.tab.router-link-exact-active') as HTMLElement
    if (!active) return
    const navRect = nav.getBoundingClientRect()
    const tabRect = active.getBoundingClientRect()
    pillStyle.value = {
      left: `${tabRect.left - navRect.left}px`,
      width: `${tabRect.width}px`,
    }
  })
}

onMounted(() => {
  document.body.classList.add('light')
  updatePill()
})

watch(() => route.path, updatePill)
</script>

<template>
  <nav class="tabs" ref="navRef">
    <div class="sliding-pill" :style="pillStyle"></div>
    <RouterLink to="/" class="tab">Home</RouterLink>
    <RouterLink to="/about" class="tab">About Me</RouterLink>
    <button
      class="theme-toggle"
      @click="toggleTheme"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </nav>
</template>

<style scoped>
.tabs {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(220, 195, 255, 0.45);
  border: 1px solid rgba(180, 140, 230, 0.5);
  box-shadow: 0 2px 12px rgba(140, 100, 200, 0.2);
}

.tab {
  position: relative;
  z-index: 1;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  transition: color var(--transition);
  color: var(--text-muted-light);
}

.sliding-pill {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: calc(100% - 10px);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 0;
}

.tab.router-link-exact-active {
  color: var(--text-light);
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

<style>
body.dark .tabs {
  background: rgba(30, 24, 50, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

body.dark .tabs .tab {
  color: #d4cce4;
}

body.dark .tabs .tab.router-link-exact-active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.15);
}
</style>
