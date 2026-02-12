require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/auth', require('../routes/auth'))

app.listen(3000, () => {
  console.log('Servidor rodando http://localhost:3000')
})
