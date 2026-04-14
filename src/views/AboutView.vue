<script setup lang="ts">
</script>

<template>
  <div class="about-page">
    <div class="card">

      <img
        class="photo-placeholder"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=320&h=320&fit=crop&crop=face"
        alt="Cute tabby cat"
      />

      <h1 class="name">Natalia Gorelova</h1>

      <div class="emojis">
        <span class="emoji" title="Design">🎨</span>
        <span class="emoji" title="Travel">✈️</span>
        <span class="emoji" title="Gardening">🌱</span>
        <span class="emoji" title="Dog">🐶</span>
        <span class="emoji" title="Cat">🐱</span>
        <span class="emoji" title="Cat">🐱</span>
        <span class="emoji" title="Cat">🐱</span>
      </div>

      <p class="about-text">
        I'm a designer and developer who loves creating beautiful digital experiences.
        When I'm not at my desk, you'll find me exploring new places, tending my garden,
        or hanging out with my dog and three cats.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-page {
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
  gap: 1rem;
  transition: background var(--transition), box-shadow var(--transition);
}

@media (min-width: 480px) {
  .card {
    padding: 2.5rem 2rem;
  }
}

:global(body.light) .card {
  background: var(--card-bg-light);
  border: 1px solid rgba(180, 160, 220, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 12px 40px rgba(120, 90, 180, 0.15);
}

:global(body.dark) .card {
  background: var(--card-bg-dark);
  border: 1px solid rgba(100, 80, 150, 0.35);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.4);
}

.photo-placeholder {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 20px rgba(140, 100, 200, 0.2), 0 0 0 1px rgba(180, 150, 230, 0.3);
  margin-bottom: 0.25rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.emojis {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.emoji {
  font-size: 2rem;
  transition: transform var(--transition);
  cursor: default;
}

.emoji:hover {
  transform: scale(1.3) rotate(-5deg);
}

.about-text {
  text-align: center;
  line-height: 1.7;
  font-size: 0.95rem;
  max-width: 380px;
}

:global(body.light) .about-text {
  color: var(--text-muted-light);
}

:global(body.dark) .about-text {
  color: var(--text-muted-dark);
}
</style>
