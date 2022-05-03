import styles from "./styles.module.css"
import { useState } from "react";
export const NewUserForm = () => {
  const [Nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [RG, setRG] = useState('');
  const [Nascimento, setNascimento] = useState('');
  const [Email, setEmail] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const onSubmit = (e) => {
    const values = { Nome:Nome, CPF:CPF, RG:RG, D_Nascimento:Nascimento, Telefone:Telefone, Email:Email, senha:senha }
    e.preventDefault();
    console.log(values);
  }

  return (
    <form className={styles.container}>
      <div className={styles.props}> 
        <h2>Dados de Cadastro</h2>
        <label htmlFor="Nome"> 
          Nome Completo
          <input type="text" name="Nome" id="Nome" placeholder="Digite Aqui" value={Nome} onChange={(e)=>setNome(e.target.value)} />    
        </label>

        <label htmlFor="CPF"> 
          CPF
          <input type="text" name="CPF" id="CPF" placeholder="Somente Números" value={CPF} onChange={(e)=>setCPF(e.target.value)}/>    
        </label>

        <label htmlFor="RG"> 
          Registro Geral (RG)
          <input type="text" name="RG" id="RG" placeholder="Somente Números" value={RG} onChange={(e)=>setRG(e.target.value)}/>    
        </label>

        <label htmlFor="Nascimento"> 
          Data de Nascimento
          <input type="date" name="Nascimento" id="Nascimento" value={Nascimento} onChange={(e)=>setNascimento(e.target.value)}/>    
        </label>

        <label htmlFor="Email"> 
          Email
          <input type="email" name="Email" id="Email" placeholder="exemplo@exemplo.com" value={Email} onChange={(e)=>setEmail(e.target.value)}/>    
        </label>

        <label htmlFor="Telefone"> 
          Telefone
          <input type="text" name="Telefone" id="Telefone" placeholder="Somente Números" value={Telefone} onChange={(e)=>setTelefone(e.target.value)}/>    
        </label>

        <label htmlFor="senha"> 
          Defina uma Senha
          <input type="password" name="senha" id="senha" placeholder="Digite Aqui" value={senha} onChange={(e)=>setSenha(e.target.value)}/>    
        </label>
        
        <button className={styles.btnConfig} onClick={onSubmit}>Confirmar Informações </button>
      </div>
    </form>
  );
}