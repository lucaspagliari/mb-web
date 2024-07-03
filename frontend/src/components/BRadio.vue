<template>
  <div class="b-radio">
    <input class="b-radio__input" :id="id" :name="name" type="radio" />
    <label class="b-radio__label" :for="id">
      <slot name="default"></slot>
    </label>
  </div>
</template>

<script setup>
import { getUid } from '@/utils'

const props = defineProps({
  label: {
    type: String
  },
  name: {
    type: String,
    default: getUid()
  }
})
const id =  getUid()
</script>

<style lang="scss" scoped>
.b-radio {
  display: flex;
  align-items: center;
  justify-content: center;
  accent-color: $black;

  &__label {
    padding-left: 0.25rem;
  }

  &__input {
    height: 1.125rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
}
</style>
