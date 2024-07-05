<template>
  <div>
    <b-field
      v-model="form.email"
      label="Endereço de e-mail"
      type="email"
      disabled
    ></b-field>
    <b-field v-model="form.name" label="Nome" disabled></b-field>
    <b-field v-model="form.document" :label="documentLabel" disabled></b-field>
    <b-field v-model="form.date" :label="dateLabel" type="date" disabled></b-field>
    <b-field v-model="form.phone" label="Telefone" disabled></b-field>
    <b-field v-model="form.password" label="Senha" type="password" disabled></b-field>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const form = inject('form')

const documentLabel = computed(() => (form.isCompany ? 'CPNJ' : 'CPF'))
const dateLabel = computed(() =>
  form.isCompany ? 'Data de abertura' : 'Data de nascimento'
)
</script>

<style lang="scss" scoped></style>
