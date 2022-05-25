import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styles from './Styles.module.css'
import axios from 'axios';

export const CadastroEstabelecimento = () => {
  const [rSocial, setRSocial] = useState('');
  const [nFantasia, setNFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [hNome, setHnome] = useState('');
  const [hCpf, setHcpf] = useState('');
  const [hEmail, setHemail] = useState('');
  const [hTelefone, setHtelefone] = useState('');
  const [senha, setSenha] = useState('');
  
  const [logradouro, setlogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    
    const estValues = { razao_social: rSocial, nome_fantasia: nFantasia , cnpj: cnpj, email: email, telefone: telefone, nome_proprietario: hNome, cpf_proprietario: hCpf, email_proprietario: hEmail, telefone_proprietario: hTelefone, senha: senha } 
    
    const addressValues = { logradouro: logradouro, numero: numero, complemento: complemento, bairro: bairro, cep: cep, cidade: cidade, uf: uf }
    e.preventDefault();
    try{
      const send = await axios.post('http://localhost:5000/estabelecimento/', estValues)
        .then(res => res.data)
        alert('Estabelecimento Cadastrado! Vamos Para Home!')
        navigate("/novoestabelecimento/address")
    }
    catch(err){
      alert(err.response.data)
    }
  }

  return (
    <div className={styles.container}>
      <form>
        <div className= {styles.props}> 
          <span>Dados do Estabelecimento</span>
         
          <input type="text" required
            placeholder="Razão Social" 
            values={rSocial} 
            onChange={(e)=>setRSocial(e.target.value)}/>    
          <div className={styles.underline}></div>

          <input type="text" required
            placeholder="Nome Fantasia" 
            values={nFantasia} 
            onChange={(e)=>setNFantasia(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="text" required
            placeholder="Cad. Nac. Pessoa Jurídica (CNPJ)" 
            values={cnpj} 
            onChange={(e)=>setCnpj(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="email" required
            placeholder="Email do Estabelecimento" 
            values={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="tel" required
            placeholder="Número do Estabelecimento" 
            values={telefone} 
            onChange={(e)=>setTelefone(e.target.value)}/>
          <div className={styles.underline}></div>
        </div>

        <div className= {styles.props}> 
          <span>Dados do Proprietário</span>
          
          <input type="text" required 
            placeholder="Nome Completo" 
            values={hNome} 
            onChange={(e)=>setHnome(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="text" required
            placeholder="Cadastro Pessoa Fisica (CPF)" 
            values={hCpf} 
            onChange={(e)=>setHcpf(e.target.value)} />
          <div className={styles.underline}></div>

          <input type="email" required
            placeholder="Email do Proprietário" 
            values={hEmail} 
            onChange={(e)=>setHemail(e.target.value)}/>
          <div className={styles.underline}></div>

          <input type="tel" required
            placeholder="Telefone do Proprietário" 
            values={hTelefone} 
            onChange={(e)=>setHtelefone(e.target.value)}/>
          <div className={styles.underline}></div>
        </div>  
        <div className={styles.props}>
          <span>Dados de Acesso</span>
          <input type="password" required
            placeholder="Defina uma Senha" 
            values={senha} 
            onChange={(e)=>setSenha(e.target.value)}/>
          <div className={styles.underline}></div>
          <button className={styles.btnCfg} onClick={onSubmit}> REGISTRAR </button>
        </div>
      </form>
    </div> 
  )};