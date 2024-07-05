import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import router from "./client/router.js"

dotenv.config()

const app = express()
const PORT = process.env.API_PORT || 3000
const APP_DIRECTORY = process.env.APP_BUILD_DIRECTORY;

app.use(cors())
app.use(express.json())
app.use(express.static(APP_DIRECTORY));

router.get('/', (req, res) => {
    res.redirect("registration");
})

app.use('/registration', router)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})