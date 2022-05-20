import { useState, useEffect } from 'react';
import {IoCreateOutline} from "react-icons/io5"
import axios from 'axios';
import styles from './Styles.module.css'

export const NovoServico = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tempo, setTempo] = useState('');
  const [profissional, setProfissional] = useState('');

  const onSubmit = (e) => {
      const Values = { especificacao:descricao, duracao:tempo, valor:valor, profissional:profissional }
      e.preventDefault();
      console.log(Values)
  }

  return (
      <form className={styles.container}>
        <div className={styles.props}>
          <div className={styles.icon}> <IoCreateOutline /> </div>
          <span>Novo Serviço</span>
          <input type='text' 
            placeholder='Serviço Ofertado' required 
            value={descricao} 
            onChange={(e)=>setDescricao(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type='number' 
            placeholder='Valor (R$)'
            value={valor} 
            onChange={ (e)=>setValor(e.target.value) }/>
          <div className={styles.underline}></div>

          <div className={styles.input_row}>
            <input placeholder='Tempo de Serviço:' disabled />
            <input type='time'
            value={tempo} 
            onChange={ (e)=>setTempo(e.target.value) }/>
          </div>
          <div className={styles.underline}></div>
          
          <div className={styles.prof_row}>
            <input placeholder= 'Profissional:' disabled/>
            <select id='profissional' name='profissional' value={profissional} onChange={ (e)=>setProfissional(e.target.value) }>
                <option selected disabled>Selecione</option>
                <option value="F1">João</option>
                <option value="F2">Maria</option>
                <option value="F3"></option>
                <option value="F4"></option>
            </select>
          </div>
          
          <div className={styles.underline}></div>
          
          <button 
          className={styles.btnCfg} 
          onClick={onSubmit}> Confirmar </button>
        </div>
      </form>
  );
}