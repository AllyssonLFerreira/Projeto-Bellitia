import React from "react"
import { RiUserAddLine } from 'react-icons/ri'
import { useState, useEffect } from "react"
import styles from './styles.module.css'
import axios from 'axios'

export const CadastroFuncionario = () =>{
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [especialidades, setEspecialidades] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/servico')
      .then(res => setEspecialidades(res.data))
      .catch(err => console.log(err))
  }, [])

  const onSubmit = async () => {
    const values = {Nome:nome, Telefone:telefone, Email:email, Especialidade:especialidades}
    try {
      const responseSubmit = await axios.post('http://localhost:5000/professional', values)
        .then(res => res.data)
        console.log(responseSubmit)
    } catch(err) {
        console.log('Will shall not pass!' , err)
    }
  };

  return (
    
      <form>
        <div className={styles.props}>
          <div className={styles.icon}> 
            <RiUserAddLine/> 
          </div>
          <span>Registrar Novo Funcionário</span>

            <input type="text"
              placeholder="Nome Completo" 
              value={nome} 
              onChange={(e)=>setNome(e.target.value)}/>
            <div className={styles.underline}></div>

            <input type="text" 
              placeholder="Telefone do Colaborador"
              value={telefone} 
              onChange={(e)=>setTelefone(e.target.value)}/>
            <div className={styles.underline}></div>

            <input type="email"
              placeholder="Email do Colaborador" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}/>
            <div className={styles.underline}></div>

            {/* <select type="checkbox" 
              onChange={(e)=>setEspecialidades(e.target.value)}>
              <option disabled>Selecione as suas Especialidades</option>
              {especialidades.map(service => <option value={service.id_service}>{service.especificacao}</option>)} 
            </select>
            <div className={styles.underline}></div> */}

          <button className={styles.btnCfg} onClick={onSubmit}>Confirmar</button>
        </div> 
      </form>
  
  ); 
};              