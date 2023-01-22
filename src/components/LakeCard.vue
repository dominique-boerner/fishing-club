<script setup lang="ts">
import type { Lake } from "@/models";
import PondifyCard from "@/components/molecules/card/PondifyCard.vue";

interface ILakeCard {
  lake: Lake;
}

defineProps<ILakeCard>();
defineEmits(["onLakeRemove"]);
</script>
<template>
  <PondifyCard
    class="text-white md:min-w-[200px] mr-2"
    :title="lake.name"
    :img="lake.img"
    :has-gradient="true"
    :is-clickable="false"
    :is-removable="true"
    @onRemoveClick="$emit('onLakeRemove')"
  ></PondifyCard>
</template>
