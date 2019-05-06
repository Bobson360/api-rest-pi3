'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name:{
        type: String,   // nome do usuario
        required:true   // obrigatorio 
    }
})

module.exports = mongoose.model('Testew', schema) // exporta o modelo com nome 'Shower'