import { Router } from 'express'
import client from "./app.js"

const router = Router();

router.get('/', (req, res) => {
  res.sendFile("index.html");
})

router.post('/', (req, res) => {
  const [status, result] = client.create(req.body)

  res.status(status).send(result)
})


export default router;
