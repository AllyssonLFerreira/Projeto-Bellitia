const { Adress } = require('../models');

module.exports = (app) => {
    const getAdress = async (req, res) =>  {
        try {
            const adress = await Adress.findAll()
            res.status(200).json(adress)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    };
    const postAdress = async (req, res) => {
        const { cidade, uf, bairro, logradouro, numero, complemento, cep } = req.body
        try {
            if(!cidade || !uf || !bairro || !logradouro || !numero || !complemento || !cep ) throw new Error('Preencha todos os campos!!')
            await Adress.create({cidade, uf, bairro, logradouro, numero, complemento, cep})
            res.status(201).json({msg: 'Endereço Cadastrado com Sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, err})
        }
    }
    const putAdress = async (req, res) => {
        const adressId= req.params.id
        const { cidade, uf, bairro, logradouro, numero, complemento, cep } = req.body
        try {
            await Adress.update(
                {cidade, uf, bairro, logradouro, numero, complemento, cep},
                {where: {id_endereco: adressId}}
            )
            res.status(200).json({msg: 'Endereço alterado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({msg: 'Endereço não pode ser alterado!', Error:true})
        }
    }
    const deleteAdress = async (req, res) => {
        const adressId= req.params.id
        try {
            await Adress.destroy(
                {where: {id_endereco: adressId}}
            )
            res.status(204).json()
        }
        catch(err) {
            res.status(400).json({msg: 'Endereço não pode ser deletado!', Error:true})
        }
    }

    return {getAdress, postAdress, putAdress, deleteAdress}
};