'use strict'

const repository = require('../repositories/teste_repository')

exports.post = async (req, res, next) => {
    console.log(res.body)
    try {
        var data = await repository.teste(req.body)
        console.log(res.body)
        res.status(200).send({
            message: 'Teste realizado com sucesso'
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        })
    }
}