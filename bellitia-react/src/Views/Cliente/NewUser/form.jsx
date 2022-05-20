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
        <span>Registre-se!</span>
        <input type="text" 
          placeholder="Nome Completo" 
          value={Nome} 
          onChange={(e)=>setNome(e.target.value)}/>
        <div className={styles.underline}></div>    
      
        <input type="text" 
          placeholder="Cadastro de Pessoa Fisica (CPF)" 
          value={CPF} 
          onChange={(e)=>setCPF(e.target.value)}/>    
        <div className={styles.underline}></div>    
      
        <input type="text" 
          placeholder="Registro Geral (RG)" 
          value={RG} 
          onChange={(e)=>setRG(e.target.value)}/>
        <div className={styles.underline}></div>        
        
        <div className={styles.row}>
          <input placeholder="D.Nascimento:" />
          <input type="date"
            value={Nascimento} 
            onChange={(e)=>setNascimento(e.target.value)}/>    
        </div>
        <div className={styles.underline}></div>
        
        <input type="email" 
          placeholder="Email" 
          value={Email} 
          onChange={(e)=>setEmail(e.target.value)}/>    
        <div className={styles.underline}></div>    

        <input type="text" 
          placeholder="Número com DDD" 
          value={Telefone} 
          onChange={(e)=>setTelefone(e.target.value)}/>    
        <div className={styles.underline}></div>
        
        <input type="password" placeholder="Digite uma Senha Aqui" 
          value={senha} 
          onChange={(e)=>setSenha(e.target.value)}/>
        <div className={styles.underline}> </div>    

        <button className={styles.btnCfg} onClick={onSubmit}> Registrar </button>
      </div>
    </form>
  );
}