const {User, Schedule, Service} = require ('../models')
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken')

module.exports = (app) => {
    const getUser = async (req, res) => {
        try {
            const users = await User.findAll({
                include: {
                    model: Service
                }
            })
            res.status(200).json(users)
        }
        catch {
            res.status(500).json({error: true, ...err})
        }
    }
    const postUser = async (req, res) => {
        const { Nome, CPF, RG, D_Nascimento, Telefone, Email, senha } = req.body
        try {
            if(!Nome || !CPF || !RG || !D_Nascimento || !Telefone || !Email || !senha) throw new Error('Preencha todos os campos!!')
            await User.create({
                Nome, CPF, RG, D_Nascimento,
                Telefone, Email, 
                senha: bcrypt.hashSync (senha, 10)})
            
            res.status(201).json({msg: 'Usuario Cadastrado com Sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, ...err})
        }
    }
    const putUser = async (req, res) => {
        const userId= req.params.id
        const {  Nome, CPF, RG, D_Nascimento, Telefone, Email, senha } = req.body
        try {
            await User.update(
                { Nome, CPF, RG, D_Nascimento, Telefone, Email, senha },
                {where: {id_user: userId}}
            )
            res.status(200).json({msg: 'Usuario alterado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({msg: 'Usuario não pode ser alterado!', Error:true})
        }
    }
    const deleteUser = async (req, res) => {
        const userId= req.params.id
        try {
            await User.destroy(
                {where: {id_user: userId}}
            )
            res.status(204).json()
        }
        catch(err) {
            res.status(400).json({msg: 'Usuario não pode ser deletado!', Error:true})
        }
    }

    const loginUser = async (req,res) => {
        const logUser = await User.findOne({ where: {Email: req.body.Email}})
    
    if (logUser && bcrypt.compareSync(req.body.senha, logUser.senha)){
           const token = jwt.sign({id: logUser.id_user, Email: logUser.Email }, 'senha')
          
           res.status(200).json({token})  
           
    }else res.status(400).json('Usuário ou senha incorretos!')

    }

    return {getUser, postUser, putUser, deleteUser, loginUser}
};