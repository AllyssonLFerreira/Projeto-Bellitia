const {User, Schedule} = require ('../models')
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken')

module.exports = (app) => {
    const getUser = async (req, res) => {
        try {
            const users = await User.findAll({
                include: {
                    model: Schedule
                }
            })
            res.status(200).json(users)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    }
    const postUser = async (req, res) => {
        const { nome, cpf, nascimento, telefone, email, senha } = req.body
        const cpfValidate = await User.findOne({
          where:{ cpf } });

        if(!cpfValidate) {
          try { 
            await User.create({
              nome, cpf, nascimento, telefone, email, 
              senha: bcrypt.hashSync (senha, 10)})
              res.status(201).json({msg: 'Usuario Cadastrado com Sucesso!'})
          }
          catch(err) {
            res.status(400).json({error: true, ...err})
          } } 
          else {
            res.status(400).json("OPA! Este cpf já está cadastrado!") 
        }
    }

    const putUser = async (req, res) => {
        const userId= req.params.id
        const {  nome, cpf, nascimento, telefone, email, senha } = req.body
        try {
            await User.update(
                { nome, cpf, nascimento, telefone, email, senha },
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