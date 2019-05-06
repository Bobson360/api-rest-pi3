'use strict'

const express       =   require('express')
const router        =   express.Router()
const controller    = require('../controllers/teste')

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node API PI_III",
        version: "0.0.2"
    })
})

router.post('/teste',   controller.post)

module.exports = router