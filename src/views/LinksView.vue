<script setup lang="ts">
import { useTheme } from 'vuetify'
import LinkButton from '../components/LinkButton.vue'

const theme = useTheme()

const links = [
  { label: 'Portfolio', url: '#', icon: 'mdi-briefcase' },
  { label: 'LinkedIn', url: '#', icon: 'mdi-linkedin' },
  { label: 'Email', url: '#', icon: 'mdi-email' },
]
</script>

<template>
  <v-container class="d-flex justify-center pa-4" style="max-width: 520px;">
    <v-card class="w-100 text-center links-card" rounded="xl" elevation="6" variant="elevated">
      <v-card-text class="d-flex flex-column align-center" style="padding: 48px 32px 56px;">
        <v-avatar size="160" style="margin-bottom: 0.25rem; border: 4px solid #ffffff; box-shadow: 0 4px 20px rgba(140, 100, 200, 0.2), 0 0 0 1px rgba(180, 150, 230, 0.3);">
          <v-img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=240&h=240&fit=crop&crop=face"
            alt="Tabby cat"
            cover
          />
        </v-avatar>

        <h1 class="text-h5 font-weight-bold" style="margin-bottom: 8px;">Natalia Gorelova</h1>
        <p class="text-body-2 text-medium-emphasis" style="margin-bottom: 40px;">Developer · Designer · Creator</p>

        <div class="d-flex flex-column ga-4 w-100" style="padding: 0 12px;">
          <LinkButton
            v-for="link in links"
            :key="link.label"
            :label="link.label"
            :url="link.url"
            :icon="link.icon"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
body.dark .links-card {
  background: rgba(30, 24, 50, 0.85) !important;
  border: 1px solid rgba(100, 80, 150, 0.35) !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.4) !important;
}

body.dark .links-card .text-h5 {
  color: #f0eaf8;
}

body.dark .links-card .text-medium-emphasis {
  color: #d0c8e0 !important;
}
</style>
