<template>
  <div class="b-radio">
    <input class="b-radio__input" v-bind="inputAttr" />
    <label class="b-radio__label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { getUid } from '@/utils/uuid'
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String
  },
  name: {
    type: String,
    default: getUid()
  },
  value: {
    type: [String, Boolean, Number]
  }
})

const id = getUid()

const inputAttr = computed(() => ({
  name: props.name,
  value: props.value,
  id,
  type: 'radio'
}))
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
@/utils/utils