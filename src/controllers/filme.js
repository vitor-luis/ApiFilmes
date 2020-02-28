const mongoose = require("mongoose");

const FilmeModel = require("./../models/filme");

class Filme{
    get(req, res){
        FilmeModel.find({}, (error, filme) => {
            if(error)
                res.send(error)
            else
                res.json({data: filme})
        })
    }
    getByID(req, res){
        FilmeModel.findById(req.params.id, (error, filme) => {
            if(error)
                res.send(error)
            else
                res.json({data: filme})
        })
    }
    create(req, res){
        FilmeModel.create(req.body, (error, filme) => {
            if(error)
                res.send(error)
            else
                res.json({message: 'Filme adicionadu com sucesso!', data: filme})
        })
    }
    update(req, res){
        FilmeModel.updateOne({_id: req.params.id}, {$set: req.body}, (error, filme) => {
            if(error)
                res.send(error)
            else
                res.json({message: 'Filme atualizado com sucesso!', data: filme})
        })
    }
    delete(req, res){
        FilmeModel.deleteOne({_id: req.params.id}, (error, filme) => {
            if (error)
                res.send(error)
            else
                res.json({message: 'Filme deletado com sucesso!', data: filme})
        })
    }
}

module.exports = new Filme();