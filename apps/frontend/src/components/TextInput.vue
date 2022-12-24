<script setup lang="ts">
import TextInput from './TextInput.vue';

interface TextInput {
  placeholder?: string;
}

defineProps<TextInput>();
</script>
<template>
  <input
    type="text"
    class="border border-1 p-2 outline-none rounded-md focus:bg-gray-100"
    :placeholder="placeholder"
  />
</template>
