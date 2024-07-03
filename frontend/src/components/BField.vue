<template>
  <div class="b-field">
    <label class="b-field__label"> {{ label }}</label>
    <input class="b-field__input" :type="type" />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.b-field {
  display: flex;
  flex-direction: column;
  margin: 0.25rem;

  &__label {
    padding-bottom: 0.5rem;
  }

  &__input {
    height: 2rem;
    border-radius: 0.5rem;
  }
}
</style>
