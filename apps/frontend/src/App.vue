<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import Modal from './components/molecules/Modal.vue';
import { routes } from './router';
import { useErrorStore } from './stores/error.store';

const errorStore = useErrorStore();

function reloadPage() {
  window.location.reload();
}
</script>
<template>
  <div
    class="flex flex-col-reverse bg-surface-body min-h-screen w-screen md:flex-row"
  >
    <NavigationBar :routes="routes" />
    <div class="p-12">
      <router-view />
    </div>
    <Modal
      v-if="errorStore.hasError"
      title="Fehler beim laden"
      icon="co-sad"
      text="Bitte aktualisieren Sie die Webseite erneut."
      action-caption="Seite aktualisieren"
      :open="true"
      @onActionClick="reloadPage()"
    />
  </div>
</template>
