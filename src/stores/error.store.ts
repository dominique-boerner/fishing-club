import { defineStore } from "pinia";

/**
 * ErrorStore
 * @description - Stores errors.
 */
export const useErrorStore = defineStore("error", {
  state: () => ({
    hasError: false,
  }),
  actions: {
    setHasError(value: boolean) {
      this.hasError = value;
    },
  },
});
