'use strict'

const express       =   require('express')
const router        =   express.Router()

const controller    = require('../controllers/user_controller')

router.post('/newUser',   controller.post)
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "User route root"
        
    })
})

module.exports = router