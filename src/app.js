'use strict'

const express       =   require('express')
const bodyParser    =   require('body-parser')
const mongoose      =   require('mongoose')

const app           =   express()


// conecta ao banco
mongoose.connect('mongodb://robsonpi3:robsonpi3@ds064278.mlab.com:64278/pi_iii')

// carrega os models
const shower = require('./models/monitring')

// Carregar as rotas
const index = require('./routes/index')
const sensorRoute = require('./routes/Routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Habilita o CORS
app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use('/', index)
app.use('/sensors', sensorRoute)


module.exports  =   app