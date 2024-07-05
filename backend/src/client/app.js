import { ClientController } from "./controller.js";
import { ClientService } from "./service.js";

const service = new ClientService()
const controller = new ClientController(service)

export default controller
