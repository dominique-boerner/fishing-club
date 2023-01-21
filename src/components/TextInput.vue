<script setup lang="ts">
import { ref } from "vue";

const isFocus = ref(false);

interface ITextInput {
  placeholder?: string;
  icon?: string;
}

defineProps<ITextInput>();
defineEmits(["onInput"]);
</script>

<template>
  <div
    class="flex flex-row items-center bg-white border border-1 p-2 rounded-md"
    :class="isFocus ? 'border-gray-800/20' : ''"
  >
    <v-icon v-if="icon" class="mr-1" scale="1.2" :name="icon" />
    <input
      class="outline-none w-full text-gray-800"
      type="text"
      :placeholder="placeholder"
      @focusin="isFocus = true"
      @focusout="isFocus = false"
      @input="$emit('onInput', $event)"
    />
  </div>
</template>
