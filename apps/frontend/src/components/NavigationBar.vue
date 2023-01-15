<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
import { Route } from '../../types';

interface NavigationBar {
  routes: Route[];
}

defineProps<NavigationBar>();

/**
 * Returns, if the given route is visible in navigation bar.
 * @param {Route} route - the route
 */
function isRouteVisible(route: Route) {
  return route.visible;
}
</script>

<template>
  <div
    class="flex flex-col justify-between items-center bg-surface-navigation shadow-xl shadow-gray-200 py-4"
  >
    <router-link to="/">
      <img src="./../assets/logo.png" class="w-12 pr-2 cursor-pointer" />
    </router-link>
    <div class="w-full flex flex-col justify-end items-center text-gray-400">
      <template
        v-for="route of routes.filter(isRouteVisible)"
        :key="route.path"
      >
        <router-link
          class="w-full text-center h-full py-4 cursor-pointer transition ease-in-out hover:text-gray-900 active:bg-gray-200 md:w-16"
          active-class="text-gray-900 bg-secondary"
          :to="route.path"
        >
          <v-icon scale="1.4" :name="route.icon" />
        </router-link>
      </template>
    </div>
  </div>
</template>
