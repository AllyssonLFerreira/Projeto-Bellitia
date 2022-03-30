const {Establishment} = require ('../models')

module.exports = (app) => {
    const getEstablishment = async (req, res) => {
        try {
            const establishment = await Establishment.findAll()
            res.status(200).json(establishment)
        }
        catch {
            res.status(500).json({error: true, ...err})
        }
    }
    const postEstablishment = async (req, res) => {
        const { razao_social, nome_fantasia, cnpj, nome_proprietario, telefone, email } = req.body
            try {
                if(!razao_social || !nome_fantasia || !cnpj || !nome_proprietario || !telefone || !email ) throw new Error('Preencha todos os campos!!')
                await Establishment.create({razao_social, nome_fantasia, cnpj, nome_proprietario, telefone, email})
                res.status(201).json({msg: 'Estabelecimento Cadastrado com Sucesso!'})
            }
            catch(err) {
                res.status(400).json({error: true, ...err})
            }
        }
    const putEstablishment = async (req, res) => {
        const establishmentId= req.params.id
        const { razao_social, nome_fantasia, cnpj, nome_proprietario, telefone, email } = req.body
        try {
            await Establishment.update(
                { razao_social, nome_fantasia, cnpj, nome_proprietario, telefone, email },
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