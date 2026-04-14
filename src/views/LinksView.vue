<script setup lang="ts">
import { useTheme } from 'vuetify'
import LinkButton from '../components/LinkButton.vue'

const theme = useTheme()

const links = [
  { label: 'Portfolio', url: '#', icon: 'mdi-briefcase' },
  { label: 'LinkedIn', url: '#', icon: 'mdi-linkedin' },
  { label: 'Email', url: '#', icon: 'mdi-email' },
]

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-container class="d-flex justify-center pa-4" style="max-width: 520px;">
    <v-card class="w-100 text-center" rounded="xl" elevation="6" variant="elevated">
      <v-card-text class="d-flex flex-column align-center pa-12 pb-14">
        <v-avatar size="130" class="mb-6 elevation-4">
          <v-img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=240&h=240&fit=crop&crop=face"
            alt="Tabby cat"
            cover
          />
        </v-avatar>

        <h1 class="text-h5 font-weight-bold mb-2">Natalia Gorelova</h1>
        <p class="text-body-2 text-medium-emphasis mb-10">Developer · Designer · Creator</p>

        <div class="d-flex flex-column ga-4 w-100 px-4">
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
