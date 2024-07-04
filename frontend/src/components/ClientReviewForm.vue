<template>
  <div>
    <b-field v-model="form.email" label="Endereço de e-mail" type="email" disabled></b-field>
    <b-field v-model="form.name" label="Nome" disabled></b-field>
    <b-field v-model="form.document" disabled></b-field>
    <b-field v-model="form.date" type="date" disabled></b-field>
    <b-field v-model="form.phone" label="Telefone" disabled></b-field>
    <b-field v-model="form.password" label="Senha" type="password" disabled></b-field>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const form = inject('form')
</script>

<style lang="scss" scoped></style>
