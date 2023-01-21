import { defineStore } from "pinia";
import type { Lake } from "@/models";

/**
 * LakeStore
 * @description - Stores the lakes from the backend.
 */
export const useLakeStore = defineStore("lake", {
  state: () => ({
    lakes: [] as Lake[],
  }),
  actions: {
    setLakes(lakes: Lake[]) {
      this.lakes = lakes;
    },
  },
});
