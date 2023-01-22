<script setup lang="ts">
import Button from "../atoms/Button.vue";

interface Modal {
  title?: string;
  text?: string;
  icon?: string;
  actionCaption?: string;
  open?: boolean;
}

defineProps<Modal>();
defineEmits(["onActionClick"]);
</script>
<template>
  <div
    v-if="open"
    class="flex justify-center items-center bg-gray-800/60 fixed top-0 bottom-0 left-0 right-0"
  >
    <dialog
      class="flex flex-col justify-between items-center rounded-sm overflow-hidden text-center max-w-[300px] min-h-[400px] text-gray-800"
      :open="open"
    >
      <div class="flex flex-col justify-center items-center">
        <v-icon v-if="icon" scale="6" :name="icon" />
        <span v-if="title" class="text-3xl font-bold">{{ title }}</span>
        <article v-if="text" class="text-xl py-4">
          {{ text }}
        </article>
      </div>
      <Button
        v-if="actionCaption"
        class="w-full"
        :text="actionCaption"
        @click="$emit('onActionClick')"
      ></Button>
    </dialog>
  </div>
</template>
