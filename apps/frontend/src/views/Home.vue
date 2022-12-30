<script setup lang="ts">
import LakeCardGrid from '../components/LakeCardGrid.vue';
import { onMounted, ref } from 'vue';
import TextInput from '../components/TextInput.vue';
import Button from '../components/atoms/Button.vue';
import { LakeService } from '../util/LakeService';
import { Lake } from '../../../backend/src/app/modules/lakes/dto/lake.dto';
import Modal from '../components/molecules/Modal.vue';

const isNewPondOpen = ref<boolean>(false);
const lakes = ref<Lake[]>([]);
const hasFetchError = ref<boolean>(false);

onMounted(() => {
  LakeService.getLakes()
    .then((response) => {
      lakes.value = response.data;
      hasFetchError.value = false;
    })
    .catch((e) => (hasFetchError.value = true));
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
        v-if="!hasFetchError"
        :lakes="lakes"
        @onLakeRemoveClick="removeLake($event)"
      />
      <Modal
        v-if="hasFetchError"
        title="Fehler beim laden"
        icon="co-sad"
        text="Bitte aktualisieren Sie die Webseite erneut."
        action-caption="Seite aktualisieren"
        :open="true"
        @onActionClick="reloadPage()"
      />
      <div
        v-if="isNewPondOpen"
        class="flex flex-col bg-white shadow-md absolute z-50 rounded-md top-0 right-0 translate-x-[103%] p-2"
      >
        <span class="font-bold">Neuer Teich</span>
        <div class="flex flex-col mb-2">
          <label>Name</label>
          <TextInput />
        </div>
        <Button text="Hinzufügen" />
      </div>
    </div>
  </div>
</template>
