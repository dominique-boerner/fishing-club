<script setup lang="ts">
import PondifyButton from "@/components/atoms/buttons/PondifyButton.vue";

interface Card {
  title?: string;
  text?: string;
  img?: string;
  isClickable?: boolean;
  isRemovable?: boolean;
}

defineProps<Card>();
defineEmits(["onCardClick", "onRemoveClick"]);
</script>
<template>
  <div
    class="flex flex-col bg-primary rounded-xl overflow-hidden w-full border border-1 transition ease-in-out"
    :class="{
      'cursor-pointer': isClickable,
      'hover:shadow-md': isClickable,
    }"
    :tabindex="isClickable ? 1 : 0"
    @click="$emit('onCardClick')"
  >
    <!-- Card Header   -->
    <div v-if="img" class="max-h-[200px]">
      <img class="w-full object-cover" :src="img" :alt="title" />
    </div>
    <!-- Card body -->
    <div class="flex flex-col bg-white p-8 h-full">
      <span v-if="title" class="flex-1 text-gray-800 text-2xl font-bold">{{
        title
      }}</span>
      <article v-if="text" class="text-gray-700">{{ text }}</article>
      <pondify-button
        v-if="isRemovable"
        class="mt-2"
        mode="primary"
        text="Löschen"
        severity="danger"
      ></pondify-button>
    </div>
  </div>
</template>
