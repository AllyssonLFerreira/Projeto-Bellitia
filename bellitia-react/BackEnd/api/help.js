const {Help} = require ('../models')

module.exports = (app) => {
    
  const getHelp = async (req, res) => {
        try {
            const help = await Help.findAll()
            res.status(200).json(help)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        } };
    
  const postHelp = async (req, res) => {
      const {descricao, nome, email} = req.body
      try { 
        if(!descricao || !nome || !email) throw new Error ("Preencha Todos os Campos")
        await Help.create({descricao, nome, email})
        res.status(201).json({msg: 'Sucesso'})
      }
      catch(err){
        res.status(400).json({error: true, ...err})
      } };

    return {getHelp, postHelp};
  }
