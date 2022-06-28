import express from 'express'
import cors from 'cors'
import * as bodyParser from 'body-parser'
import routes from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const HOST = process.env.HOST || 'localhost'
const PORT = parseInt(process.env.PORT ?? '3000')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(...routes)

app.listen(PORT, HOST, () => {
    console.log(`App listening on ${HOST}:${PORT}`)
})