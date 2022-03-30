const {Professional} = require ('../models')

module.exports = (app) => {
    const getProfessional = async (req, res) => {
        try {
            const professional = await Professional.findAll()
            res.status(200).json(professional)
        }
        catch {
            res.status(500).json({error: true, ...err})
        }
    }
    const postProfessional = async (req, res) => {
        const { Nome, D_Nascimento, Telefone, Email, Especialidade } = req.body
        try {
            if(!Nome || !D_Nascimento || !Telefone || !Email || !Especialidade ) throw new Error('Preencha todos os campos!!')
            await Professional.create({Nome, D_Nascimento, Telefone, Email, Especialidade})
            res.status(201).json({msg: 'Profissional Cadastrado com Sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, ...err})
        }
    }
    const putProfessional = async (req, res) => {
        const professionalId= req.params.id
        const { Nome, D_Nascimento, Telefone, Email, Especialidade } = req.body
        try {
            await Professional.update(
                {Nome, D_Nascimento, Telefone, Email, Especialidade },
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