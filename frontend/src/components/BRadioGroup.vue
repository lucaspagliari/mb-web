<template>
  <div class="v-radio-group">
    <b-radio v-for="{ label } in items" :key="label" :name="name">{{ label }}</b-radio>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array
  }
})

import { getUid } from '@/utils'

const name = getUid()
</script>

<style lang="scss" scoped>
.v-radio-group {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
}
</style>
