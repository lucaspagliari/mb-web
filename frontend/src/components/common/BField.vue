<template>
  <div class="b-field">
    <label class="b-field__label"> {{ label }}</label>
    <input v-model="text" class="b-field__input" :type="type" />
    <p class="b-field__message">{{ message }}</p>

  </div>
</template>

<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String
  },
  rules: {
    type: Array,
    default: [(v) => !!v || 'Campo necessário']
  }
})

const text = ref()
const message = ref()

watch(text, () => console.log(text.value))

function validate() {
  const { rules } = props
  for (let i = 0; i < rules.length; i++) {
    const fun = rules[0]
    const result = fun(text.value)

    if (typeof result === 'string') {
      message.value = result
      break
    }
  }
}

defineExpose({
  validate: validate
})
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
  }
  &__message {
    color: $gray;
    height: 20px;
    display: inline-block;
    padding: 4px 0;
    font-size: 0.75rem;
  }
}
</style>
