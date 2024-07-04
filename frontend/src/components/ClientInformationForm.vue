<template>
  <div class="client-information-form">
    <b-field
      v-model="form.name"
      v-model:is-valid="formValid.name"
      label="Nome"
      :rules="[required]"
    ></b-field>
    <b-field
      v-model="form.document"
      v-model:is-valid="formValid.document"
      v-bind="documentField"
    ></b-field>
    <b-field
      v-model="form.date"
      v-model:is-valid="formValid.date"
      v-bind="dateField"
      :rules="[required]"
    ></b-field>
    <b-field
      v-model="form.phone"
      v-model:is-valid="formValid.phone"
      label="Telefone"
      :rules="[required, isPhoneNumber]"
    ></b-field>
  </div>
</template>

<script setup>
import { isCnpj, isCpf, isPhoneNumber, required } from '@/utils/rules'
import { inject, computed, reactive, watch } from 'vue'

const form = inject('form')

const documentField = computed(() => ({
  label: form.isCompany ? 'CPNJ' : 'CPF',
  rules: [required, form.isCompany ? isCnpj : isCpf]
}))

const dateField = computed(() => ({
  label: form.isCompany ? 'Data de abertura' : 'Data de nascimento',
  type: 'date'
}))

const model = defineModel()
const formValid = reactive({})
watch(formValid, () => {
  model.value = Object.keys(formValid).every((k) => formValid[k])
})
</script>

<style lang="scss" scoped>
.client-information-form {
  &__actions {
    display: flex;
    gap: 16px;
  }
}
</style>
