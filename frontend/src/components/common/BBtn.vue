<template>
  <button
    :class="btnClasses"
    :style="btnStyles"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    <slot name="default"></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: String,
  outlined: Boolean,
  disabled: Boolean,
  width: String
})

const btnClasses = computed(() => ({
  'b-btn': true,
  'b-btn__outlined': props.outlined,
  'b-btn__disabled': props.disabled
}))

const btnStyles = computed(() => ({
  width: props.width
}))
const emits = defineEmits(['click'])

function handleClick() {
  if (props.disabled) return
  emits('click')
}
</script>
<style scoped lang="scss">
.b-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  width: 100%;
  font-size: 16px;
  padding: 0.625rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;

  background-color: $primary;
  color: $white;

  opacity: 1;
  border: none;
  transition: all 250ms ease-in-out;

  @include hoverEffect($primary);

  &__outlined {
    border: solid 2px $primary;
    background-color: $white;
    color: $primary;
    @include hoverEffect($white);
  }

  &__disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}
</style>
