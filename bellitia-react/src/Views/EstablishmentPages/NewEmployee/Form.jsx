import React from "react"
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
    <div className={styles.container}> 
      <form>
        <div className={styles.props}>
          <h2>Registrar Novo Funcionário</h2>

          <label htmlFor="nome"> Nome Completo
            <input id="nome" name="nome" type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
          </label>

          <label htmlFor="tel"> Telefone
            <input id="tel" name="tel" type="text" value={telefone} onChange={(e)=>setTelefone(e.target.value)}/>
          </label>

          <label htmlFor="email"> Email
            <input id="email" name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>

          <label htmlFor="service"> Especialidades
            <select id="service" name="service" type="checkbox" onChange={(e)=>setEspecialidades(e.target.value)}>
              <option disabled>Selecione as suas Especialidades</option>
              {especialidades.map(service => <option value={service.id_service}>{service.especificacao}</option>)} 
            </select>
          </label>

          <button onClick={onSubmit}>Confirmar</button>
        </div> 

      </form>
    </div>
  ); 
};              