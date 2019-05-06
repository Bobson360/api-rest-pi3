'use strict'
const mongoose = require('mongoose')
const User = mongoose.model('Testew')

exports.teste = async(data) => {
    console.log(data)
    var user = new User(data)
    await user.save()
}