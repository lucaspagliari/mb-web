<template>
  <div class="b-alert">
    <p class="b-alert__title">Alerta</p>
    <ul class="b-alert__content">
      <li
        v-for="(message, i) in messages"
        :key="`${message}-${i}`"
        class="b-alert__messages"
      >
        - {{ message }}
      </li>
    </ul>
  </div>
</template>
<script setup>

const props = defineProps({
  messages: Array
})
</script>

<style lang="scss" scoped>
.b-alert {
  display: flex;
  gap: 6px;
  flex-direction: column;
  // border: 1px solid $red;
  background: $red;
  color: $white;
  border-radius: 8px;
  padding: 12px;
  margin: 12px 0;

  &__content {
    padding: 0 4px;
  }
  &__messages {
    margin: 8px 0;
  }
}
</style>
