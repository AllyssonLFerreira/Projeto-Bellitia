import { useState } from 'react';
import {IoCreateOutline} from "react-icons/io5"
import axios from 'axios';
import styles from './Styles.module.css'

export const NovoServico = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tempo, setTempo] = useState('');

  const onSubmit = async (event) => {
      const values = { especificacao: descricao, duracao: tempo, valor: valor }
      event.preventDefault();
    try {
      const send = await axios.post('http://localhost:5000/servico/', values)
        .then(res => res.data)
      alert('serviço cadastrado')
    }
    catch(err) {
      alert(err.responde.data)
    }
  }

  return (
      <form className={styles.container}>
        <div className={styles.props}>
          <div className={styles.icon}> <IoCreateOutline /> </div>
          <span>Novo Serviço</span>
          <input type='text' required
            placeholder='Serviço Ofertado'  
            value={descricao} 
            onChange={(e)=>setDescricao(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type='text' required
            placeholder='Valor (R$)'
            value={valor} 
            onChange={ (e)=>setValor(e.target.value) }/>
          <div className={styles.underline}></div>

          <div className={styles.input_row}>
            <input placeholder='Tempo de Serviço:' disabled />
            <input type='time' required
            value={tempo} 
            onChange={ (e)=>setTempo(e.target.value) }/>
          </div>
          <div className={styles.underline}></div>
          
          <button 
          className={styles.btnCfg} 
          onClick={onSubmit}> Confirmar </button>
        </div>
      </form>
  );
}