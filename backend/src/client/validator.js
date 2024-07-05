import Joi from "joi"
import { cpf, cnpj } from "cpf-cnpj-validator"
import { phone } from "phone"


const isCpfOrCpnj = (value, helpers) => {
  if (cnpj.isValid(value) || cpf.isValid(value)) {
    return value
  }
  return helpers.message('O documento é inválido')
}

const isPhoneNumber = (value, helpers) => {
  if (phone(value, { country: "BR", validateMobilePrefix: false }).isValid) {
    return value
  }
  return helpers.message('O número de telefone é inválido')
}

export const clientSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.base': 'O email deve ser do tipo texto',
      'string.empty': 'O email não pode estar vazio',
      'string.email': 'O email deve ser um endereço de email válido',
      'any.required': 'O email é obrigatório'
    }),
  isCompany: Joi.boolean()
    .required()
    .messages({
      'boolean.base': 'O campo isCompany deve ser um valor booleano (true/false)',
      'any.required': 'Deve escolher Pessoa Física ou Pessoa Jurídica'
    }),
  name: Joi.string()
    .required()
    .messages({
      'string.base': 'O nome deve ser do tipo texto',
      'string.empty': 'O nome não pode estar vazio',
      'any.required': 'O nome é obrigatório'
    }),
  document: Joi.string()
    .required()
    .custom(isCpfOrCpnj, 'document validation')
    .messages({
      'string.base': 'O documento deve ser do tipo texto',
      'string.empty': 'O documento não pode estar vazio',
      'any.required': 'O documento é obrigatório'
    }),
  date: Joi.date()
    .required()
    .messages({
      'date.base': 'A data deve ser do tipo data (YYYY-MM-DD)',
      'any.required': 'A data é obrigatória'
    }),
  phone: Joi.string()
    .required()
    .custom(isPhoneNumber, 'phone number validation')
    .messages({
      'any.required': 'O telefone é obrigatório'
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.base': 'A senha deve ser do tipo texto',
      'string.empty': 'A senha não pode estar vazia',
      'any.required': 'A senha é obrigatória'
    }),
});
