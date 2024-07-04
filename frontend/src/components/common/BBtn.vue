<template>
  <button
    :class="{ 'b-btn': true, 'b-btn__outlined': outlined, 'b-btn__disabled': disabled }"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    <slot name="default"></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  color: String,
  outlined: Boolean,
  disabled: Boolean
})

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
    opacity: .7;
    cursor: not-allowed;
  }
}
</style>
