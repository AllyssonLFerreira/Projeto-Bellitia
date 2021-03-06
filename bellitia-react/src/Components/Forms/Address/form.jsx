import styles from './styles.module.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const FormAddress = () => {
  const [logradouro, setlogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    const addressValues = { logradouro: logradouro, numero: numero, complemento: complemento, bairro: bairro, cep: cep, cidade: cidade, uf: uf }
    e.preventDefault();
    try{
      const send = await axios.post('http://localhost:5000/endereco', addressValues)
      .then(res => res.data)
        alert ('Endereço Cadastrado com Sucesso. Vamos para Home')
        navigate('/estabelecimento')
    } 
    catch(err) {
        alert(err.response.data)
    }
  }

  return (
    <div className={styles.container}>
      <form>
        <div className= {styles.props}> 
          <span>Endereço do Estabelecimento</span>

          <input type="text" required
            placeholder="Logradouro (Rua/Avenida)" 
            values={logradouro} 
            onChange={(e)=>setlogradouro(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="text" required
            placeholder="Número"
            values={numero} 
            onChange={(e)=>setNumero(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="text" 
            placeholder="Complemento" 
            values={complemento} 
            onChange={(e)=>setComplemento(e.target.value)}/>
          <div className={styles.underline}></div>

          <input 
            type="text" required
            placeholder="Bairro" 
            values={bairro} 
            onChange={(e)=>setBairro(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="text" required
            placeholder="Caixa Postal (CEP)" 
            values={cep} 
            onChange={(e)=>setCep(e.target.value)}/>
          <div className={styles.underline}></div>

          <div className={styles.uf_city}>
            <input type="text" required
              placeholder="Cidade"
              values={cidade} 
              onChange={(e)=>setCidade(e.target.value)}/>
            <select required values={uf} onChange={(e)=>setUf(e.target.value)}> 
              <option value="" disabled selected>Selecione</option>
              <option>Rio Grande do Sul</option>
            </select>
          </div>  
            <div className={styles.underline}></div>
        </div>
        <button className={styles.btnCfg} onClick={onSubmit}>REGISTRAR</button>
      </form>
    </div>
  )
}