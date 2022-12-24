<script setup lang="ts">
import { Lake } from '@fishing-club/fishing-club-types';
import LakeCard from './LakeCard.vue';
import Card from './Card.vue';

interface LakeCard {
  lake: Lake;
}

defineProps<LakeCard>();
</script>
<template>
  <Card
    class="text-white md:min-w-[200px] mr-2"
    :title="lake.name"
    :img="lake.img"
    :has-gradient="true"
    :is-clickable="false"
    :is-removable="true"
  ></Card>
</template>
