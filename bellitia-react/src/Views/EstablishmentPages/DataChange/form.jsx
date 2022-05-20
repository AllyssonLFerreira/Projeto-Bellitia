import styles from './styles.module.css';
import { useState } from 'react';

export const Form = () => {
 
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

  const onSubmit = (e) => {
    
    const estValues = { razao_social:rSocial, nome_fantasia:nFantasia , cnpj:cnpj, email:email, telefone:telefone, nome_proprietario:hNome, cpf_proprietario:hCpf, email_proprietario:hEmail, telefone_proprietario:hTelefone, senha:senha }
    
    const addressValues = { logradouro:logradouro, numero:numero, complemento:complemento, bairro:bairro, cep:cep, cidade:cidade, uf:uf }
    e.preventDefault();
    console.log( estValues, addressValues )
  }

  return (
      <div className={styles.container}>
        <form>
          <div className= {styles.props}> 
            <span>Dados do Estabelecimento</span>
           
            <input type="text" 
              placeholder="Razão Social" 
              values={rSocial} 
              onChange={(e)=>setRSocial(e.target.value)}/>    
            <div className={styles.underline}></div>
  
            <input type="text"  
              placeholder="Nome Fantasia" 
              values={nFantasia} 
              onChange={(e)=>setNFantasia(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <input type="text" 
              placeholder="Cad. Nac. Pessoa Jurídica (CNPJ)" 
              values={cnpj} 
              onChange={(e)=>setCnpj(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <input type="email" 
              placeholder="Email do Estabelecimento" 
              values={email} 
              onChange={(e)=>setEmail(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <input type="tel" 
              placeholder="Número do Estabelecimento" 
              values={telefone} 
              onChange={(e)=>setTelefone(e.target.value)}/>
            <div className={styles.underline}></div>
  
          </div>
  
          <div className= {styles.props}> 
            <span>Endereço do Estabelecimento</span>
  
            <input type="text" 
              placeholder="Logradouro (Rua/Avenida)" 
              values={logradouro} 
              onChange={(e)=>setlogradouro(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <input type="text" 
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
              type="text" 
              placeholder="Bairro" 
              values={bairro} 
              onChange={(e)=>setBairro(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <input type="text" 
              placeholder="Caixa Postal (CEP)" 
              values={cep} 
              onChange={(e)=>setCep(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <div className={styles.uf_city}>
              <input type="text" 
                placeholder="Cidade"
                values={cidade} 
                onChange={(e)=>setCidade(e.target.value)}/>
              <select values={uf} onChange={(e)=>setUf(e.target.value)}> 
                <option value="" disabled selected>Selecione</option>
              </select>
            </div>  
              <div className={styles.underline}></div>
          </div>
  
          <div className= {styles.props}> 
            <span>Dados do Proprietário</span>
            
            <input type="text" 
              placeholder="Nome Completo" 
              values={hNome} 
              onChange={(e)=>setHnome(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <input type="text" 
              placeholder="Cadastro Pessoa Fisica (CPF)" 
              values={hCpf} 
              onChange={(e)=>setHcpf(e.target.value)} />
            <div className={styles.underline}></div>
  
            <input type="email" 
              placeholder="Email do Proprietário" 
              values={hEmail} 
              onChange={(e)=>setHemail(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <input type="tel" 
              placeholder="Telefone do Proprietário" 
              values={hTelefone} 
              onChange={(e)=>setHtelefone(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <span>Dados de Acesso</span>
  
            <input type="password" 
              placeholder="Defina uma Senha" 
              values={senha} 
              onChange={(e)=>setSenha(e.target.value)}/>
            <div className={styles.underline}></div>
  
            <button className={styles.btnCfg} onClick={onSubmit}> REGISTRAR </button>
          </div>  
        </form>
      </div> 
  )
}