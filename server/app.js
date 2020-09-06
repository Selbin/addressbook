const express = require('express')
const dotEnv = require('dotenv')
const indexRoutes = require('./routes/indexRoutes')
const cors = require('cors')

dotEnv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/addressbook', indexRoutes)

app.listen(process.env.APP_PORT, () => console.log('listening to: ', process.env.APP_PORT))

module.exports = app
