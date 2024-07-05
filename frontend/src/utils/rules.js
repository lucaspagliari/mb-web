import { cpf, cnpj } from 'cpf-cnpj-validator';
import { phone } from "phone"

export const required = (v) => !!v || 'Campo obrigatório'

export const requiredBoolean = (v) => typeof v === 'boolean' || 'Campo obrigatório'

export const isEmail = (v) => /.+@.+\..+/.test(v) || 'E-mail inválido'

export const isCpf = (v) => !!cpf.isValid(v) || 'CPF inválido'

export const isCnpj = (v) => !!cnpj.isValid(v) || 'CNPJ inválido'

export const isPhoneNumber = (v) => phone(v, { country: "BR", validateMobilePrefix: false }).isValid || 'Número de telefone inválido'

export const dateBefore = (before) => {
  return (v) => {
    const date = new Date(v)
    return before - date > 0 || `Data deve ser anterior ao dia ${before.toLocaleDateString('pt-br')}`
  }
}

export const dateBeforeNow = dateBefore(new Date())
