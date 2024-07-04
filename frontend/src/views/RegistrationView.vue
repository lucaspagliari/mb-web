<script setup>
import { useStepper } from '@vueuse/core'
import { reactive, provide, computed } from 'vue'
import { clientService } from '@/services/clientService'
const form = reactive({

})
const formValid = reactive({
  clientEmail: false,
  clientInformation: false,
  clientPassword: false
})

provide('form', form)

const registerSteps = computed(() => ({
  'client-email': {
    title: 'Seja bem vindo(a)',
    disabledBtn: !formValid.clientEmail
  },
  'client-information': {
    title: form.isCompany ? 'Pessoa Jurídica' : 'Pessoa Física',
    disabledBtn: !formValid.clientInformation
  },
  'client-password': {
    title: 'Senha de acesso',
    disabledBtn: !formValid.clientPassword
  },
  'client-review': {
    title: 'Revise suas informações',
    disabledBtn: false
  }
}))

const { index, goToNext, goToPrevious, isFirst, isLast, current, isCurrent } =
  useStepper(registerSteps)

async function registerClient() {
  const [data, error] = await clientService.create(form)

  if (data) {
    console.log('cliente cadastrado com sucesso')
  }

  if (error) {
    console.log('cliente não foi cadastrado')
  }
}
</script>

<template>
  <div class="registration-view">
    <b-stepper :index="index">{{ current.title }}</b-stepper>
    <ClientEmailForm v-model="formValid.clientEmail" v-show="isCurrent('client-email')" />

    <ClientInformationForm
      v-model="formValid.clientInformation"
      v-show="isCurrent('client-information')"
    />

    <ClientPasswordForm v-model="formValid.clientPassword" v-show="isCurrent('client-password')" />

    <ClientReviewForm v-show="isCurrent('client-review')" />
    <div v-show="isCurrent('client-confirm')">cliente salvo</div>

    <div class="registration-view__actions">
      <b-btn v-if="!isFirst" outlined @click="goToPrevious">Voltar</b-btn>
      <b-btn v-if="!isLast" @click="goToNext" :disabled="current.disabledBtn">Continuar</b-btn>
      <b-btn v-if="isLast" @click="registerClient">Cadastrar</b-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.registration-view {
  margin: auto;
  max-width: 300px;

  &__actions {
    display: flex;
    gap: 16px;
  }
}
</style>
