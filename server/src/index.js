import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'

import { mongoLink } from '../secret.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)

mongoose.connect(
    mongoLink
)

app.listen(3001, () => {
    console.log("SERVER STARTED")
}) 



