'use strict'

const express       =   require('express')
const bodyParser    =   require('body-parser')
const mongoose      =   require('mongoose')
const dotenv        =   require('dotenv').config()
const CronJob       =   require('cron').CronJob


const app           =   express()


// conecta ao banco
// mongoose.connect('mongodb://robsonpi3:robsonpi3@ds064278.mlab.com:64278/pi_iii')
mongoose.connect(process.env.DB_CONN)

const job = new CronJob('0 0 * * * *', () => {
    console.log('tarefa agendada')
    }, null, true, 'America/Sao_Paulo')

// carrega os models
const shower = require('./models/monitring')
const users = require('./models/users')
const tester = require('./models/teste_model')

// Carregar as rotas
const index = require('./routes/index')
const showerRoute = require('./routes/ShowerRoutes')
const userRoute = require('./routes/UserRoutes')

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
app.use('/shower', showerRoute)
app.use('/user', userRoute)


module.exports  =   app