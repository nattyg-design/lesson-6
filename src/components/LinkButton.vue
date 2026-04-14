<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()

function openLink(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <v-btn
    block
    rounded="pill"
    size="large"
    variant="tonal"
    color="purple"
    @click="openLink(url)"
  >
    <v-icon style="margin-right: 10px;">{{ icon }}</v-icon>
    {{ label }}
  </v-btn>
</template>
