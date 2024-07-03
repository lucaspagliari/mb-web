import { cpf, cnpj } from 'cpf-cnpj-validator';


export const required = (v) => !!v || 'Campo obrigatório'

export const isEmail = (v) => /.+@.+\..+/.test(v) || 'E-mail inválido'

export const isCpf = (v) => !!cpf.isValid(v) || 'CPF inválido'

export const isCnpj = (v) => !!cnpj.isValid(v) || 'CNPJ inválido'

