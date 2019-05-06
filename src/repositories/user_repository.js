'use strict'
const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.create = async(data) => {
    console.log(data)
    var user = new User(data)
    await user.save()
}