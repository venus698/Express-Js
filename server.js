const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost/userData')
mongoose.connection.once('open', () => {
    console.log('connection successful')
})
app.use(bodyParser.json())
app.use(routes)
app.listen(process.env.port || 3002, () => {
    console.log('Server Started')
})