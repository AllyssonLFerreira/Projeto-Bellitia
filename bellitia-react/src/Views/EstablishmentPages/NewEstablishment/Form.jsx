import BtnConfirm from "../../../Components/Buttons/BtnConfirm"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styles from './Styles.module.css'
/* import axios from 'axios'; */

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
          <h2>Dados do Estabelecimento</h2>
          <label htmlFor="razao_social"> 
            Razão Social
            <input type="text" name="razao_social" placeholder="Razão Social..." values={rSocial} onChange={(e)=>setRSocial(e.target.value)}/>    
          </label>

          <label htmlFor="nome_fantasia">
            Nome Fantasia
            <input type="text" name="nome_fantasia" placeholder="Nome Fantasia LTDA" values={nFantasia} onChange={(e)=>setNFantasia(e.target.value)}/>
          </label>

          <label htmlFor="cnpj">
            CNPJ
            <input type="text" name="cnpj" placeholder="00-000.000/0001-00" values={cnpj} onChange={(e)=>setCnpj(e.target.value)}/>
          </label>

          <label htmlFor="email">
            Email do Estabelecimento
            <input type="email" name="email" placeholder="exemplo@exemplo.com.br" values={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>

          <label htmlFor="telefone">
            Telefone do Estabelecimento
            <input type="tel" name="telefone" placeholder="(00) 9 0000-0000" values={telefone} onChange={(e)=>setTelefone(e.target.value)}/>
          </label>
        </div>

        <div className= {styles.props}> 
          <h2>Endereço do Estabelecimento</h2>
          <label htmlFor="logradouro">
            Rua/Avenida
            <input name="logradouro" type="text" placeholder="avenida exemplo..." values={logradouro} onChange={(e)=>setlogradouro(e.target.value)}/>
          </label>

          <label htmlFor="numero">
            Número
            <input name="numero" type="text" placeholder="123 ..."values={numero} onChange={(e)=>setNumero(e.target.value)}/>
          </label>

          <label htmlFor="complemento">
            Complemento
            <input name="complemento" type="text" placeholder="loja 05 galeria exemplo..." values={complemento} onChange={(e)=>setComplemento(e.target.value)}/>
          </label>

          <label htmlFor="bairro">
            Bairro
            <input name="bairro" type="text" placeholder=" Boa Vizinhança..." values={bairro} onChange={(e)=>setBairro(e.target.value)}/>
          </label>

          <label htmlFor="cep">
            Caixa Postal(CEP)
            <input name="cep" type="text" placeholder="12.345-678" values={cep} onChange={(e)=>setCep(e.target.value)}/>
          </label>
          
          <label htmlFor="cidade">
            Cidade
          <input name="cidade" type="text" placeholder="Porto Alegre..."values={cidade} onChange={(e)=>setCidade(e.target.value)}/>
          </label>

          <label htmlFor="uf">
            Estado
            <select name="uf" values={uf} onChange={(e)=>setUf(e.target.value)}> 
              <option value="" disabled selected>Selecione</option>
            </select>
          </label>
        </div>

                
        <div className= {styles.props}> 
          <h2>Dados do Proprietário</h2>
          <label htmlFor="nome">
            Nome Completo
            <input type="text" name="nome" placeholder="Digite aqui..."values={hNome} onChange={(e)=>setHnome(e.target.value)}/>
          </label>

          <label htmlFor="cpf_proprietario">
            Cadastro Pessoa Fisica(CPF)
            <input type="text" name="cpf_proprietario" placeholder="01234567890..." values={hCpf} onChange={(e)=>setHcpf(e.target.value)} />
          </label>

          <label htmlFor="email_proprietario">
            Email do Proprietário
            <input type="email" name="email_proprietario" placeholder="exemplo@exemplo..." values={hEmail} onChange={(e)=>setHemail(e.target.value)}/>
          </label>
          
          <label htmlFor="telefone">
            Telefone do Proprietário
            <input type="tel" name="telefone" placeholder="DDD + Número..." values={hTelefone} onChange={(e)=>setHtelefone(e.target.value)}/>
          </label>
        </div>

        <div className={styles.props}>
          <h2>Dados de Acesso</h2>
          <label htmlFor="senha">
            Defina uma senha:
            <input type="password" name="senha" placeholder="Digite Aqui" values={senha} onChange={(e)=>setSenha(e.target.value)}/>
          </label>
        
          <button className={styles.btnCfg} onClick={onSubmit}> Confirmar </button>
        </div>  
      </form>
    </div> 
  )}