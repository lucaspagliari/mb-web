<template>
  <div>
    <b-field
      v-model="form.password"
      v-model:is-valid="formValid.password"
      label="Sua senha"
      type="password"
      :rules="[required]"
    ></b-field>
  </div>
</template>

<script setup>
import { required } from '@/utils/rules'
import { reactive, watch, inject } from 'vue'

const form = inject('form')

const model = defineModel()
const formValid = reactive({})
watch(formValid, () => {
  model.value = Object.keys(formValid).every((k) => formValid[k])
})
</script>

<style lang="scss" scoped></style>
