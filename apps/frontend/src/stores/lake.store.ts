import { defineStore } from 'pinia';
import { Lake } from '@fishing-club/fishing-club-types';

/**
 * LakeStore
 * @description - Stores the lakes from the backend.
 */
export const useLakeStore = defineStore('lake', {
  state: () => ({
    lakes: [] as Lake[],
  }),
  actions: {
    setLakes(lakes: Lake[]) {
      this.lakes = lakes;
    },
  },
});
