<script setup lang="ts">
import TextInput from "../components/TextInput.vue";
import { pocketBaseServiceInstance } from "@/services/PocketbaseService";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.store";
import PondifyButton from "@/components/atoms/buttons/PondifyButton.vue";

const router = useRouter();
const userStore = useUserStore();

const username = ref("");
const password = ref("");

async function login() {
  await pocketBaseServiceInstance.authenticate(username.value, password.value);
  if (pocketBaseServiceInstance.pocketBase.authStore.isValid) {
    const user = pocketBaseServiceInstance.pocketBase.authStore.model;
    userStore.setUser(user);
    await router.push("/");
  }
}
</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="text-center flex flex-col p-4 bg-white w-1/3">
      <h1 class="mb-4">Login</h1>
      <text-input
        class="mb-2"
        placeholder="Nutzername"
        @onInput="username = $event.target.value"
      ></text-input>
      <text-input
        class="mb-2"
        placeholder="Passwort"
        @onInput="password = $event.target.value"
      ></text-input>
      <PondifyButton
        mode="primary"
        text="Anmelden"
        @click="login()"
      ></PondifyButton>
    </div>
  </div>
</template>
