<template>
  <div class="registration-view">
    <template v-if="!isCurrent('client-confirm')">
      <b-stepper :index="index" :max-index="4">{{ current.title }}</b-stepper>

      <ClientEmailForm v-show="isCurrent('client-email')" />
      <ClientInformationForm v-show="isCurrent('client-information')" />
      <ClientPasswordForm v-show="isCurrent('client-password')" />
      <ClientReviewForm v-show="isCurrent('client-review')" />

      <div class="registration-view__actions">
        <b-btn v-if="!isFirst" outlined @click="goToPrevious">Voltar</b-btn>
        <b-btn
          v-if="!isCurrent('client-review')"
          @click="goToNext"
          :disabled="current.disabledBtn"
        >
          Continuar
        </b-btn>
        <b-btn
          v-if="isCurrent('client-review')"
          :loading="state.loading"
          @click="registerClient"
        >
          Cadastrar
        </b-btn>
      </div>
      <b-alert v-if="state.hasError" :messages="state.messages">Formulário contém os erros:</b-alert>
    </template>
    <template v-else>
      <div class="registration-view__completed">
        <h2>Cadastro concluído</h2>
        <img class="registration-view__check" src="@/assets/check.svg" alt="check icon" />
        <b-btn @click="goTo('client-email')" width="20px"> Início </b-btn>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useStepper } from '@vueuse/core'
import { reactive, provide, computed } from 'vue'
import { clientService } from '@/services/clientService'
import { useAsync } from '@/composables/useAsync'

const form = reactive({
  // email: 'lucas.alexpagliari@gmail.com',
  // isCompany: false,
  // name: 'LUCAS ALEXANDRE PAGLIARI',
  // document: '41700757814',
  // date: '2024-07-03',
  // phone: '11972271999',
  // password: 'minhasenha'
})

provide('form', form)

const registerSteps = computed(() => ({
  'client-email': {
    title: 'Seja bem vindo(a)'
  },
  'client-information': {
    title: form.isCompany ? 'Pessoa Jurídica' : 'Pessoa Física'
  },
  'client-password': {
    title: 'Senha de acesso'
  },
  'client-review': {
    title: 'Revise suas informações'
  },
  'client-confirm': {
    title: 'Cliente Cadastrado'
  }
}))

const { index, goToNext, goToPrevious, isFirst, current, isCurrent, goTo,  } =
  useStepper(registerSteps)

const { state, run } = useAsync(clientService.create)

async function registerClient() {
  await run(form)
  if (!state.hasError) {
    goToNext()
  }
}
</script>

<style lang="scss" scoped>
.registration-view {
  margin: auto;
  max-width: 350px;

  &__actions {
    display: flex;
    gap: 16px;
  }

  &__completed {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  &__check {
    width: 50px;
    height: 50px;
  }
}
</style>
