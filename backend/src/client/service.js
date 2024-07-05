export class ClientService {

  create(data) {
    delete data.password;
    return {
      ...data
    }
  }

}