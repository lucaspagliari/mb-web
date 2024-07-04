<template>
  <div class="b-stepper">
    <p>
      Etapa <span class="b-stepper__current">{{ index + 1 }}</span> de 4
    </p>
    <h2><slot name="default"></slot></h2>
  </div>
</template>

<script setup>
defineProps({
  index: Number
})
</script>

<style lang="scss" scoped>
.b-stepper {
  margin-bottom: 1.5rem;

  &__current {
    display:inline-block;
    color: $primary;
    margin-bottom: 0.75rem;
  }
}
</style>
