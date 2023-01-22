<script setup lang="ts">
import LakeCard from "./LakeCard.vue";
import type { Lake } from "@/models";
import PondifyCard from "@/components/molecules/card/PondifyCard.vue";

interface ILakeCardGrid {
  lakes: Lake[];
}

defineProps<ILakeCardGrid>();
defineEmits(["onLakeRemoveClick"]);
</script>
<template>
  <div
    class="grid grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 gap-1 w-full"
  >
    <LakeCard
      v-for="lake in lakes"
      :key="lake.id"
      :lake="lake"
      @onRemoveClick="$emit('onLakeRemoveClick', lake.id)"
    />
    <PondifyCard title="Teich hinzufügen"></PondifyCard>
  </div>
</template>
