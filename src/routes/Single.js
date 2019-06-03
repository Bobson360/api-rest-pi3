'use strict'

const express       =   require('express')
const router        =   express.Router()

const controller    = require('../controllers/Single_Controller')
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node API PI_III",
        version: "0.0.1"
    })
})

router.post('/:id', controller.put)
router.post('/', controller.post)
router.get('/:id', controller.get)

module.exports = router