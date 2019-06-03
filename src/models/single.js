'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    board:{
        type: String,
        required: true
    },
    leituras: {
                pot: Number,    
                vol: Number,    
                required: false
     }
})

module.exports = mongoose.model('Single', schema) 