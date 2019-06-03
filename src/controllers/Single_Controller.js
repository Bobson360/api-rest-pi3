'use strict'

const repository = require('../repositories/Single_Repository')

/**
 *      INICIA UM NOVO BANHO
 */

exports.put = async (req, res, next) => {
    try {
        var data = await repository.update(req.params.id, req.body)
        res.status(200).send({
            message: 'Atualização de Registro'
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        var data = await repository.create(req.body)
        res.status(200).send({
            message: 'Banho iniciado'
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get(req.params.id)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}
