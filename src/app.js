'use strict'

const express       =   require('express')
const bodyParser    =   require('body-parser')
const mongoose      =   require('mongoose')

const app           =   express()
const router        =   express.Router()

// conecta ao banco
mongoose.connect('mongodb://robsonpi3:robsonpi3@ds064278.mlab.com:64278/pi_iii')

// carrega os models
const shower = require('./models/monitring')

// model adaptada para simplificar o projeto
const single = require('./models/single')

// Carregar as rotas
const index = require('./routes/index')
const sensorRoute = require('./routes/Routes')

// rotas adaptada para simplificar o projeto
const singleRoute = require('./routes/Single')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)
app.use('/sensors', sensorRoute)
app.use('/single', singleRoute)

module.exports  =   app