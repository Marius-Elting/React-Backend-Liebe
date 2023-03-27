import express from 'express'
import morgan from 'morgan'

const PORT = 8787
const app = express()

app.use(morgan('dev'))


app.get('/getData', (req, res) => {
    res.json({ message: "Das hat funktioniert" })
})


app.listen(PORT, () => console.log('Server runs on Port:', PORT))