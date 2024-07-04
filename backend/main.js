import express from "express"
import cors from "cors"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const directory = '../frontend/dist/';

app.use(express.static(directory));

app.get('/', (req, res) => {
    res.redirect('/register')
})

app.get('/register', (req, res) => {
    res.sendFile(directory + "index.html");
})

app.post('/register', (req, res) => {
    res.status(201).json({ message: 'created' })
})

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
})