const {Establishment, Address, Service, Professional} = require ('../models')
const bcrypt = require ('bcrypt');

module.exports = (app) => {
    const getEstablishment = async (req, res) => {
        try {
            const establishment = await Establishment.findAll({
                include:{
                    model: Professional 
                }
            })
            res.status(200).json(establishment)
        }
        catch {
            res.status(500).json({error: true, ...err})
        }
    }
    const postEstablishment = async (req, res) => {
        const { 
            razao_social, nome_fantasia, cnpj, 
            nome_proprietario, telefone, email, 
            cpf_proprietario, email_proprietario,
            telefone_proprietario, senha } = req.body

        const cnpjValidate = await Establishment.findOne({where: {cnpj} } )

        if(!cnpjValidate) {
            try {
                await Establishment.create({
                    razao_social, nome_fantasia, cnpj, 
                    nome_proprietario, telefone, email, 
                    cpf_proprietario, email_proprietario, telefone_proprietario, 
                    senha: bcrypt.hashSync (senha, 10)})
                    res.status(201).json({msg: 'Level Up!'})
                }
                catch(err) {
                    res.status(400).json({error: true, ...err})
                } } else {
                    res.status(400).json('CNPJ já está cadastrado')
                }
        }
        
    const putEstablishment = async (req, res) => {
        const establishmentId= req.params.id
        const { razao_social, nome_fantasia, cnpj, nome_proprietario, telefone, email, cpf_proprietario, email_proprietario, telefone_proprietario, senha } = req.body
        try {
            await Establishment.update(
                { razao_social, nome_fantasia, cnpj, nome_proprietario, telefone, email, cpf_proprietario, email_proprietario, telefone_proprietario, senha },
                {where: {id_establishment: establishmentId}}
            )
            res.status(200).json({msg: 'Estabelecimento alterado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({msg: 'Estabelecimento não pode ser alterado!', Error:true})
        }
    }
    const deleteEstablishment = async (req, res) => {
        const establishmentId= req.params.id
        try {
            await Establishment.destroy(
                {where: {id_establishment: establishmentId}}
            )
            res.status(204).json()
        }
        catch(err) {
            res.status(400).json({msg: 'Estabelecimento não pode ser deletado!', Error:true})
        }
    }

    return {getEstablishment, postEstablishment, putEstablishment, deleteEstablishment}
};