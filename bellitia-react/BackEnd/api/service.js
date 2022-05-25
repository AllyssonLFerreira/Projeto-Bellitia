const {Service, Establishment} = require ('../models');


module.exports = (app) => {
    const getService = async (req, res) => {
        try {
            const service = await Service.findAll({
                include: {
                    model: Establishment
                }
            })
            res.status(200).json(service)
        }
        catch {
            res.status(500).json({error: true, ...err})
        }
    }
    const postService = async (req, res) => {
        const { especificacao, duracao, valor, id_establishment } = req.body
        try {
            if(!especificacao || !duracao || !valor) throw new Error('Preencha todos os campos!!')
            await Service.create({especificacao, duracao, valor,  id_establishment})
            res.status(201).json({msg: 'Serviço Cadastrado com Sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, ...err})
        }
    }
    const putService =  async (req, res) => {
        const serviceId= req.params.id
        const { especificacao, duracao, valor } = req.body
        try {
            await Service.update(
                { especificacao, duracao, valor },
                {where: {id_service: serviceId}}
            )
            res.status(200).json({msg: 'Serviço alterado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({msg: 'Serviço não pode ser alterado!', Error:true})
        }
    }
    const deleteService = async (req, res) => {
        const serviceId= req.params.id
        try {
            await Service.destroy(
                {where: {id_service: serviceId}}
            )
            res.status(204).json()
        }
        catch(err) {
            res.status(400).json({msg: 'Serviço não pode ser deletado!', Error:true})
        }
    }
    return {getService, postService, putService, deleteService}
};