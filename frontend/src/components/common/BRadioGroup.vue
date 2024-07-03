<template>
  <div class="v-radio-group">
    <b-radio
      v-for="item in items"
      :key="item.label"
      :name="name"
      :label="item.label"
      :value="item.value"
    ></b-radio>
  </div>
</template>

<script setup>
import { getUid } from '@/utils/uuid'

const props = defineProps({
  items: {
    type: Array
  }
})


const name = getUid()
</script>

<style lang="scss" scoped>
.v-radio-group {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
}
</style>
@/utils/utils