import { cpf, cnpj } from 'cpf-cnpj-validator';
import phone from "phone"

export const required = (v) => !!v || 'Campo obrigatório'

export const requiredBoolean = (v) => typeof v === 'boolean' || 'Campo obrigatório'

export const isEmail = (v) => /.+@.+\..+/.test(v) || 'E-mail inválido'

export const isCpf = (v) => !!cpf.isValid(v) || 'CPF inválido'

export const isCnpj = (v) => !!cnpj.isValid(v) || 'CNPJ inválido'

export const isPhoneNumber = (v) => {

    console.log(phone(v, { country: "BR", validateMobilePrefix: false }));

    return phone(v, { country: "BR", validateMobilePrefix: false }).isValid || 'Número de telefone inválido'
    }
