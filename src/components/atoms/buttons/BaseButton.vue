<script setup lang="ts">
type ButtonMode = "primary" | "secondary";

interface IButton {
  text?: string;
  mode?: ButtonMode;
}
defineProps<IButton>();
</script>
<template>
  <button
    :class="mode === 'primary' ? 'btn--primary' : 'btn--secondary'"
    class="btn"
  >
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
@tailwind components;

@layer components {
  .btn {
    @apply px-4 py-3 rounded-md uppercase tracking-wide transition ease-in-out font-bold hover:opacity-80;

    // primary button
    &.btn--primary {
      @apply bg-primary text-white;
    }

    // secondary button
    &.btn--secondary {
      @apply bg-secondary;
    }
  }
}
</style>
