import { clientSchema } from "./validator.js";

export class ClientController {

  constructor(service) {
    this.service = service
  }


  create(data) {
    const { error } = clientSchema.validate(data, { abortEarly: false })
    if (error) {
      return [400, { errors: error.details }]
    }
    const result = this.service.create(data)
    return [201, { data: result }]
  }
}