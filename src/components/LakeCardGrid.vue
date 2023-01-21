<script setup lang="ts">
import LakeCard from "./LakeCard.vue";
import Card from "./Card.vue";
import pondImage from "./../assets/pond.png";
import type { Lake } from "@/models";

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
    <Card
      title="Teich hinzufügen"
      class="border-dashed border-2 border-gray-800 text-gray-800 md:min-w-[200px]"
      :imgIcon="pondImage"
    ></Card>
  </div>
</template>
