import styles from "./styles.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const NewUserForm = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    const values = { nome: nome, cpf: cpf, nascimento: nascimento, telefone: telefone, email: email, senha: senha }
    event.preventDefault();
    try {
      const send = await axios.post('http://localhost:5000/usuarios/', values)
        .then(res => res.data)
      alert('Bem Vindo! Vamos para Home!')
      navigate('/areacliente');
    }
    catch(err) {
      alert(err.responde.data)
    }
  }

  return (
    <form className={styles.container}>
      <div className={styles.props}> 
        <span>Registre-se!</span>
        <input type="text" required
          placeholder="Nome Completo" 
          value={nome} 
          onChange={(e)=>setNome(e.target.value)}/>
        <div className={styles.underline}></div>    
      
        <input type="text" required
          placeholder="Cadastro de Pessoa Fisica (CPF)" 
          value={cpf} 
          onChange={(e)=>setCPF(e.target.value)}/>    
        <div className={styles.underline}></div>         
        
        <div className={styles.row}>
          <input placeholder="D.Nascimento:" disabled />
          <input type="date" required
            value={nascimento} 
            onChange={(e)=>setNascimento(e.target.value)}/>    
        </div>
        <div className={styles.underline}></div>
        
        <input type="email" required
          placeholder="Email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>    
        <div className={styles.underline}></div>    

        <input type="text" required
          placeholder="Número com DDD" 
          value={telefone} 
          onChange={(e)=>setTelefone(e.target.value)}/>    
        <div className={styles.underline}></div>
        
        <input type="password" required 
          placeholder="Digite uma Senha Aqui" 
          value={senha} 
          onChange={(e)=>setSenha(e.target.value)}/>
        <div className={styles.underline}> </div>    

        <button className={styles.btnCfg} onClick={onSubmit}> Registrar </button>
      </div>
    </form>
  );
}