 const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connect = require('./config')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connect()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals',require('./routes/goalRoutes.js'))
app.use('/api/users',require('./routes/userRoutes.js'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))