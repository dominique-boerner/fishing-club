<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import { routes } from './router';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from './stores/user.store';

const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  if (!userStore.user) {
    router.push('login');
  }
});
</script>
<template>
  <div
    class="flex flex-col-reverse bg-surface-body min-h-screen w-screen md:flex-row"
  >
    <NavigationBar v-if="userStore.user" :routes="routes" />
    <router-view />
  </div>
</template>
