<script setup lang="ts">
interface Card {
  title?: string;
  img?: string;
  imgIcon?: string;
  hasGradient?: boolean;
  isClickable?: boolean;
  isRemovable?: boolean;
}

defineProps<Card>();
defineEmits(["onCardClick", "onRemoveClick"]);
</script>
<template>
  <div
    class="rounded-xl overflow-hidden w-full min-h-[200px] md:min-h-[160px] relative"
    :tabindex="isClickable ? 1 : 0"
    @click="$emit('onCardClick')"
  >
    <img
      v-if="img"
      class="w-full h-full absolute top-0 object-cover"
      :src="img"
      :alt="title"
    />
    <div class="flex flex-col absolute p-2 items-end w-full justify-end z-50">
      <v-icon
        v-if="isRemovable"
        scale="1.6"
        name="fa-trash-alt"
        class="text-danger cursor-pointer rounded-md p-2 hover:bg-gray-800/20"
        @click="$emit('onRemoveClick')"
      ></v-icon>
    </div>
    <div
      class="flex flex-col justify-end items-center h-full w-full z-10 absolute"
    >
      <img v-if="imgIcon" :src="imgIcon" class="w-28" alt="" />
      <span v-if="title" class="font-bold p-4">{{ title }}</span>
    </div>
    <div
      v-if="hasGradient"
      class="bg-gradient-to-t from-gray-800 h-32 absolute bottom-0 left-0 right-0"
    ></div>
  </div>
</template>
