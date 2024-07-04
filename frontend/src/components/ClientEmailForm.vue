<template>
  <div>
    <b-field
      v-model="form.email"
      v-model:is-valid="formValid.email"
      ref="email"
      label="Endereço de e-mail"
      type="email"
      :rules="[required, isEmail]"
    ></b-field>
    <b-radio-group
      v-model="form.isCompany"
      v-model:is-valid="formValid.isCompany"
      :items="items"
      :rules="[requiredBoolean]"
    >
    </b-radio-group>
  </div>
</template>

<script setup>
import { isEmail, required, requiredBoolean } from '@/utils/rules'
import { watch } from 'vue'
import { reactive, inject } from 'vue'

const items = [
  { label: 'Pessoa física', value: false },
  { label: 'Pessoa jurídica', value: true }
]

const form = inject('form')
const model = defineModel()
const formValid = reactive({})
watch(formValid, () => {
  model.value = Object.keys(formValid).every((k) => formValid[k])
})
</script>

<style lang="scss" scoped></style>
