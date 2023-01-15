<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import Modal from './components/molecules/Modal.vue';
import { routes } from './router';
import { useErrorStore } from './stores/error.store';
import { pocketBaseServiceInstance } from './services/PocketbaseService';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isAuthenticated = pocketBaseServiceInstance.pocketBase.authStore.isValid;

onMounted(() => {
  if (!isAuthenticated) {
    router.push('login');
  }
});
</script>
<template>
  <div
    class="flex flex-col-reverse bg-surface-body min-h-screen w-screen md:flex-row"
  >
    <NavigationBar v-if="isAuthenticated" :routes="routes" />
    <router-view />
  </div>
</template>
