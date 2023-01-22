<script setup lang="ts">
type ButtonMode = "primary" | "secondary";
type ButtonSeverity = "default" | "danger";
interface IButton {
  text?: string;
  mode?: ButtonMode;
  severity?: ButtonSeverity;
}

defineProps<IButton>();
</script>
<template>
  <button
    :class="{
      'btn--primary': mode === 'primary',
      'btn--secondary': mode === 'secondary',
      'btn--default': severity === 'default',
      'btn--danger': severity === 'danger',
    }"
    class="btn"
  >
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
@tailwind components;

@layer components {
  .btn {
    @apply px-4 py-3 rounded-md uppercase tracking-wide transition ease-in-out hover:opacity-70;

    // primary button
    &.btn--primary {
      @apply bg-primary text-white;

      // primary button -- danger
      &.btn--danger {
        @apply bg-danger text-white;
      }
    }

    // secondary button
    &.btn--secondary {
      @apply bg-transparent;

      // secondary button -- danger
      &.btn--danger {
        @apply text-danger;
      }
    }
  }
}
</style>
