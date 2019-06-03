'use strict'
const mongoose = require('mongoose')
const Single = mongoose.model('Single')

exports.update = async(id, data) => {
    console.log('repository update ')
    console.log(id)

    await Single.findByIdAndUpdate(id, {
        $push: {
            leituras: {
                pot: data.pot, // temperatura de entrada da agua
                vol: data.vol // temperatura de saida da agua
            }
        }
    })
}

exports.create = async(data) => {
    console.log('metodo create')
    var single = new Single(data)
    await single.save()
}


exports.get = async(id) => {
    console.log(id)
    const single = await Single
    .findById({
        _id:id
        // 'user':'robson'
    })
    let potencia = 0
    let volume = 0
    let dados
    //let data = `${single.data_inicial.dia}/${single.data_inicial.mes}/${single.data_inicial.ano}`
    let data = {dia: 3, mes: 6, mes_string: 'Junho', ano: 2019, hora: 12, minutos: 0}
     
    for(var i = 0; i < single.leituras.pot.length; i++){
        potencia += single.leituras.pot[i]
    }

    for(var i = 0; i < single.leituras.vol.length; i++){
        volume += single.leituras.vol[i]
    }

    potencia = potencia / single.leituras.pot.length
    volume = volume / single.leituras.vol.length
   
    dados = {volume, potencia, data}

    console.log(dados)
    return single
}