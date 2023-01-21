<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

interface IButton {
  text?: string;
}

defineProps<IButton>();
</script>
<template>
  <BaseButton :text="text" mode="secondary"></BaseButton>
</template>
