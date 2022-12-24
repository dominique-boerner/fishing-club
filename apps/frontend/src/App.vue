<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import { routes } from './router';
</script>
<template>
  <div
    class="flex flex-col-reverse bg-surface-body min-h-screen w-screen md:flex-row"
  >
    <NavigationBar :routes="routes" />
    <router-view />
  </div>
</template>
