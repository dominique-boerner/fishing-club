<script setup lang="ts">
import LakeCardGrid from '../components/LakeCardGrid.vue';
import { onMounted } from 'vue';
import { useLakeStore } from '../stores/lake.store';
import { useErrorStore } from '../stores/error.store';
import TextInput from '../components/TextInput.vue';
import { lakeServiceInstance } from '../services/LakeService';
import { useUserStore } from '../stores/user.store';

const userStore = useUserStore();
const lakeStore = useLakeStore();
const errorStore = useErrorStore();

onMounted(() => {
  lakeServiceInstance
    .getLakes()
    .then((response) => {
      lakeStore.setLakes(response.items);
      errorStore.setHasError(false);
    })
    .catch(() => {
      errorStore.setHasError(true);
    });
});

function removeLake(id: string) {
  lakeServiceInstance.removeLake(id);
}
</script>
<template>
  <main class="flex flex-col p-8">
    <h1 class="pb-2">Hallo {{ userStore.user.name }}👋</h1>
    <h2 class="pb-2">Unsere Teiche</h2>
    <TextInput class="mb-2" placeholder="Suchen" icon="fc-search" />
    <LakeCardGrid
      v-if="!errorStore.hasError"
      :lakes="lakeStore.lakes"
      @onLakeRemoveClick="removeLake($event)"
    />
  </main>
</template>
