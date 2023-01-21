<script setup lang="ts">
import Card from "./Card.vue";
import type { Lake } from "@/models";

interface ILakeCard {
  lake: Lake;
}

defineProps<ILakeCard>();
defineEmits(["onLakeRemove"]);
</script>
<template>
  <Card
    class="text-white md:min-w-[200px] mr-2"
    :title="lake.name"
    :img="lake.img"
    :has-gradient="true"
    :is-clickable="false"
    :is-removable="true"
    @onRemoveClick="$emit('onLakeRemove')"
  ></Card>
</template>
