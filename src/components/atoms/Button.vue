<script setup lang="ts">
interface IButton {
  text?: string;
  icon?: string;
}
defineProps<IButton>();
</script>
<template>
  <button
    class="bg-primary px-4 py-3 rounded-md text-white uppercase tracking-wide transition ease-in-out hover:opacity-80"
  >
    <v-icon v-if="icon" class="mr-1" :name="icon" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>
