import { useState } from 'react';
import axios from 'axios';
import styles from './Styles.module.css'

export const NovoServico = () => {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tempo, setTempo] = useState('');
    const [profissional, setProfissional] = useState('');

    const onSubmit = (e) => {
        const values = { especificacao:descricao, duracao:tempo, valor:valor, profissional:profissional }
        e.preventDefault();
        console.log(values)
    }
    return (
        <div >
            <form >
                <div className={styles.props}>
                    <h2>Novo Serviço</h2>
                    <label htmlFor='descricao'>
                        Descrição do Serviço:
                        <textarea 
                            type='text' 
                            placeholder='Especifique o serviço ofertado aqui ...' required 
                            id='descricao' name='descricao'
                            value={descricao} onChange={ (e)=>setDescricao(e.target.value) } 
                        />
                    </label>

                    <label htmlFor='valor'>
                        Valor Cobrado (R$)
                        <input type='number' id='valor' name='valor' value={valor} onChange={ (e)=>setValor(e.target.value) }/>
                    </label>

                    <div className={styles.radioProps}>
                        <label htmlFor='tempo'> 
                            Tempo aprox. de serviço? 
                            <input type='text' placeholder='ex: 60 minutos' id='tempo' name='tempo' value={tempo} onChange={ (e)=>setTempo(e.target.value) }/>
                        </label>
                    </div>
                    
                    <label htmlFor='profissional'>
                        Escolha um Profissional
                        <select id='profissional' name='profissional' value={profissional} onChange={ (e)=>setProfissional(e.target.value) }>
                            <option selected disabled>Selecione</option>
                            <option value="F1">João</option>
                            <option value="F2">Maria</option>
                            <option value="F3"></option>
                            <option value="F4"></option>
                        </select>
                    </label>
                    <button 
                    className={styles.btn_confirm} 
                    onClick={onSubmit}> Confirmar </button>
                </div>
            </form>
        </div>
    );
}