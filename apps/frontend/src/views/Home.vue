<script setup lang="ts">
import LakeCardGrid from '../components/LakeCardGrid.vue';
import { onMounted } from 'vue';
import { LakeService } from '../util/LakeService';
import Modal from '../components/molecules/Modal.vue';
import { useErrorStore } from '../stores/error.store';
import { useLakeStore } from '../stores/lake.store';

const errorStore = useErrorStore();
const lakeStore = useLakeStore();

onMounted(() => {
  LakeService.getLakes()
    .then((response) => {
      lakeStore.setLakes(response.data);
      errorStore.setHasError(false);
    })
    .catch(() => {
      errorStore.setHasError(true);
    });
});

function removeLake(id: string) {
  LakeService.removeLake(id);
}

function reloadPage() {
  window.location.reload();
}
</script>
<template>
  <div class="flex flex-col h-screen p-4">
    <h1 class="pb-2">Hallo👋</h1>
    <h2 class="pb-2">Unsere Teiche</h2>
    <div class="relative">
      <LakeCardGrid
        v-if="!errorStore.hasError"
        :lakes="lakeStore.lakes"
        @onLakeRemoveClick="removeLake($event)"
      />
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
  </div>
</template>
