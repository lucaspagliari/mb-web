<template>
  <div class="b-field">
    <label class="b-field__label"> {{ label }}</label>
    <input v-model="model" class="b-field__input" :type="type" :disabled="disabled" />
    <p class="b-field__message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { useValidate } from '@/composables/useValidate'
import { useDebounceFn } from '@vueuse/core'
import { watch, onMounted } from 'vue'

const emits = defineEmits(['update:isValid'])

const model = defineModel()

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  rules: {
    type: Array,
    default: []
  }
})
onMounted(() => emits('update:isValid', false))

const { validate, errorMessage } = useValidate({
  onSuccess: () => emits('update:isValid', true),
  onError: () => emits('update:isValid', false)
})

watch(model, () => validate(model.value, props.rules))
</script>

<style lang="scss" scoped>
.b-field {
  display: flex;
  flex-direction: column;
  margin: 4px;

  &__label {
    padding-bottom: 8px;
  }
  &__input {
    height: 2rem;
    border-radius: 8px;
    font-size: 0.875rem;
    padding: 2px 8px;
    font-weight: 500;

    &:disabled {
      color: $gray;
      border-color: $gray;
    }
  }
  &__message {
    color: $red;
    height: 16px;
    display: inline-block;
    padding: 4px 0;
    font-size: 0.75rem;
  }


}
</style>
