<template>
  <div class="b-radio-group">
    <div class="b-radio-group__options">
      <b-radio
        v-for="item in items"
        v-model="model"
        :key="item.label"
        :name="name"
        :label="item.label"
        :value="item.value"
        @click="() => (model = item.value)"
      ></b-radio>
    </div>
    <p class="b-radio-group__message">{{ errorMessages }}</p>
  </div>
</template>

<script setup>
import { getUid } from '@/utils/uuid'
import { watch } from 'vue'
import { useValidate } from '@/composables/useValidate'

const model = defineModel({ default: null })
const emits = defineEmits(['update:isValid'])

const props = defineProps({
  items: {
    type: Array
  },
  rules: {
    type: Array,
    default: []
  }
})

const name = getUid()

const { validate, errorMessages } = useValidate({
  onSuccess: () => emits('update:isValid', true),
  onError: () => emits('update:isValid', false)
})

watch(model, () => validate(model.value, props.rules), { immediate: true })
</script>

<style lang="scss" scoped>
.b-radio-group {
  margin: 8px 0 16px;
  &__options {
    display: flex;
    justify-content: space-between;
  }

  &__message {
    color: $red;
    height: 12px;
    display: inline-block;
    padding: 4px 0;
    font-size: 0.75rem;
  }
}
</style>
@/utils/utils
