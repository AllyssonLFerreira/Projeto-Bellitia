import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import SwitchButton from '../Buttons/SwitchButton';
import styles from "./cardProps.module.css"


const BarraLateral = () =>{

  const navigate = useNavigate()
  const handleLogout = () => {
  
      document.cookie = `dadosLogin=; expires=${new Date(0)}`
      navigate('/')
  }

    return (
        <div className={styles.NavBar}>
            
            <Link to='/estabelecimento'> CONTROLE DE AGENDA </Link>
            <Link to='/novofuncionario'> CADASTRO DE FUNCIONÁRIO </Link>
            <Link to='/novoservico'> CADASTRO DE SERVIÇOS </Link>
            <Link to='/estabelecimento/alteracao'> ALTERAÇÃO DE DADOS </Link>
            <Link to='/estabelecimento/help'> PRECISO DE AJUDA </Link>
            <Link to='/' onClick={handleLogout}> SAIR </Link>
           
            <SwitchButton />
            
        </div>
)
    }
export default BarraLateral;