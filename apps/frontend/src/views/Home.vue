<script setup lang="ts">
import LakeCardGrid from '../components/LakeCardGrid.vue';
import { mockLakes } from '../mocks/mock-lakes';
import { ref } from 'vue';
import TextInput from '../components/TextInput.vue';
import Button from '../components/atoms/Button.vue';
import Card from "../components/Card.vue";

const isNewPondOpen = ref(false);

function togglePondOpen() {
  isNewPondOpen.value = !isNewPondOpen.value;
}
</script>
<template>
  <div class="flex flex-col h-screen p-4">
    <h1 class="pb-2">Hallo👋</h1>
    <h2 class="pb-2">Unsere Teiche</h2>
    <div class="relative">
      <LakeCardGrid :lakes="mockLakes" @onNewPondClick="togglePondOpen()" />
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
    <!--    <NewsTile />-->
    <!--    <Button text="Neues Mitglied" icon="fa-home" />-->
    <!--    <p>Wie viele Mitglieder?</p>-->
    <!--    <p>Wie viele Teiche?</p>-->
    <!--    <p>Neuigkeiten?</p>-->
    <!--    <p>nächste Termine?</p>-->
  </div>
</template>
