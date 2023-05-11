<script setup lang="ts">
import BlockItem from './BlockItem.vue'
defineProps<{ data: Article[] }>()
interface Article {
  details: string
  url: string
}
</script>
<template>
  <div class="block__group">
    <BlockItem v-for="(item, index) in data" :key="index">
      <template #image>
        <img
          src="https://assets.telex.hu/images/20230511/1683788698-temp-klEgEC_cimlap-normal.jpg"
          srcset="
            https://assets.telex.hu/images/20230511/1683788698-temp-klEgEC_cimlap-normal@1x.jpg 1x,
            https://assets.telex.hu/images/20230511/1683788698-temp-klEgEC_cimlap-normal@2x.jpg 2x,
            https://assets.telex.hu/images/20230511/1683788698-temp-klEgEC_cimlap-normal@3x.jpg 3x,
            https://assets.telex.hu/images/20230511/1683788698-temp-klEgEC_cimlap-normal@4x.jpg 4x
          "
          :alt="item.details"
          loading="lazy"
        />
      </template>
      <template #details>
        <h2>
          <a :href="item.url">{{ item.details }}</a>
        </h2>
      </template>
    </BlockItem>
  </div>
</template>
