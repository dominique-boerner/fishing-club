import { defineStore } from "pinia";
import type { Admin } from "pocketbase";

/**
 * UserStore
 * @description - Stores errors.
 */
export const useUserStore = defineStore("user", {
  state: (): { user: null | Record<any, any> | Admin } => ({
    user: null,
  }),
  actions: {
    setUser(user: Record<any, any> | Admin | null) {
      this.user = user;
    },
  },
});
