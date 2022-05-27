const {Professional, Establishment} = require ('../models')

module.exports = (app) => {
    const getProfessional = async (req, res) => {
        try {
            const professional = await Professional.findAll({
              include:{
                  model: Establishment
              }
          })
            res.status(200).json(professional)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    }
    const postProfessional = async (req, res) => {
        const { Nome, Telefone, Email, id_establishment } = req.body
        try {
            if(!Nome || !Telefone || !Email ) throw new Error('Preencha todos os campos!!')
            await Professional.create({Nome, Telefone, Email, id_establishment})
            res.status(201).json({msg: 'Profissional Cadastrado com Sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, ...err})
        }
    }
    const putProfessional = async (req, res) => {
        const professionalId= req.params.id
        const { Nome, Telefone, Email, id_establishment } = req.body
        try {
            await Professional.update(
                { Nome, Telefone, Email, id_establishment },
                {where: {id_professional: professionalId}}
            )
            res.status(200).json({msg: 'Profissional alterado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({msg: 'Profissional não pode ser alterado!', Error:true})
        }
    }
    const deleteProfessional = async (req, res) => {
        const professionalId= req.params.id
        try {
            await Professional.destroy(
                {where: {id_professional: professionalId}}
            )
            res.status(204).json()
        }
        catch(err) {
            res.status(400).json({msg: 'Usuario não pode ser deletado!', Error:true})
        }
    }

    return {getProfessional, postProfessional, putProfessional, deleteProfessional}
};