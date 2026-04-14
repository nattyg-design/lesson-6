<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.add('light')
})
</script>

<template>
  <div class="app-shell">
    <nav class="tabs">
      <RouterLink to="/" class="tab">Home</RouterLink>
      <RouterLink to="/about" class="tab">About Me</RouterLink>
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
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.tab {
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.35rem 0;
  border-bottom: 2px solid transparent;
  transition: color var(--transition), border-color var(--transition);
}

:global(body.light) .tab {
  color: var(--text-muted-light);
}

:global(body.dark) .tab {
  color: var(--text-muted-dark);
}

.tab.router-link-exact-active {
  border-bottom-color: currentColor;
}

:global(body.light) .tab.router-link-exact-active {
  color: var(--text-light);
}

:global(body.dark) .tab.router-link-exact-active {
  color: var(--text-dark);
}

.tab:hover {
  opacity: 0.75;
}
</style>
