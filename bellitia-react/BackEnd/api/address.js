const { Address, Establishment } = require('../models');

module.exports = (app) => {
    const getAddress = async (req, res) =>  {
        try {
            const address = await Address.findAll({
                include:{
                    model: Establishment
                }
            })
            res.status(200).json(address)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    };
    const postAddress = async (req, res) => {
        const { cidade, uf, bairro, logradouro, numero, complemento, cep } = req.body
        try {
            if(!cidade || !uf || !bairro || !logradouro || !numero || !complemento || !cep) throw new Error('Preencha todos os campos!!')
            await Address.create({cidade, uf, bairro, logradouro, numero, complemento, cep})
            res.status(201).json({msg: 'Endereço Cadastrado com Sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, err})
            console.log(err)
        }
    }
    const putAddress = async (req, res) => {
        const addressId= req.params.id
        const { cidade, uf, bairro, logradouro, numero, complemento, cep } = req.body
        try {
            await Address.update(
                {cidade, uf, bairro, logradouro, numero, complemento, cep},
                {where: {id_endereco: addressId}}
            )
            res.status(200).json({msg: 'Endereço alterado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({msg: 'Endereço não pode ser alterado!', Error:true})
        }
    }
    const deleteAddress = async (req, res) => {
        const addressId= req.params.id
        try {
            await Address.destroy(
                {where: {id_endereco: addressId}}
            )
            res.status(204).json()
        }
        catch(err) {
            res.status(400).json({msg: 'Endereço não pode ser deletado!', Error:true})
        }
    }

    return {getAddress, postAddress, putAddress, deleteAddress}
};