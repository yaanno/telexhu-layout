<script setup lang="ts">
// @ts-ignore
import data from '@/data.json'
import BlockGroup from './BlockGroup.vue'
const firstGroupData = data.slice(0, 1)
const secondGroupData = data.slice(1, 2)
const thirdGroupData = data.slice(0, 3)
</script>

<template>
  <div class="layout__item">
    <div class="layout__header"></div>
    <div class="layout__content">
      <BlockGroup :data="firstGroupData" />
      <BlockGroup :data="secondGroupData" />
      <BlockGroup :data="thirdGroupData" style="--stacked: true" />
    </div>
  </div>
</template>
