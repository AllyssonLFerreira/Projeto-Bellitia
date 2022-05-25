import React from "react"
import { RiUserAddLine } from 'react-icons/ri'
import { useState, useEffect } from "react"
import styles from './styles.module.css'
import axios from 'axios'

export const CadastroFuncionario = () =>{
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  /* const [establishment, setEst] = useState([]);
  const [est, setEstablishment] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/estabelecimento')
      .then(res => setEst(res.data))
      .catch(err => console.log(err))
  }, [])  */

  const onSubmit = async (event) => {
    const values = { Nome: nome, Telefone: telefone, Email: email }
    event.preventDefault();
    try {
      const send = await axios.post('http://localhost:5000/professional/', values)
        .then(res => res.data)
      alert('Profissional Cadastrado')
    }
    catch(err) {
      alert(err.response.data)
    }
  }

  return (
      <form>
        <div className={styles.props}>
          <div className={styles.icon}> 
            <RiUserAddLine/> 
          </div>
          <span>Registrar Novo Funcionário</span>

            <input type="text" required
              placeholder="Nome Completo" 
              value={nome} 
              onChange={(e)=>setNome(e.target.value)}/>
            <div className={styles.underline}></div>

            <input type="text" required
              placeholder="Telefone do Colaborador"
              value={telefone} 
              onChange={(e)=>setTelefone(e.target.value)}/>
            <div className={styles.underline}></div>

            <input type="email" required
              placeholder="Email do Colaborador" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}/>
            <div className={styles.underline}></div>

            {/* <select onChange={(e)=>setEstablishment(e.target.value)}>
              {establishment.map(est=> <option value={est.id_establishment}>{est.nome_fantasia}</option>)}
            </select>
            <div className={styles.underline}></div> */}
          <button className={styles.btnCfg} onClick={onSubmit}>Confirmar</button>
        </div> 
      </form>
  
  ); 
};              