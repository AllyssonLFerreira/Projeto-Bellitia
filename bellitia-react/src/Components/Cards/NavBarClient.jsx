import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./cardProps.module.css";

const BarraLateralCliente = () =>{

    const navigate = useNavigate()
    const handleLogout = () => {

    document.cookie = `dadosLoginUser=; expires=${new Date(0)}`
    navigate('/')

    }
  return (
    <div className={styles.NavBar}>
      <Link to='/areacliente'>BUSCA</Link>
      <Link to='/agendamentoscliente'>MEUS AGENDAMENTOS</Link>
      <Link to='/novousuario'>ALTERAÇÃO DE DADOS</Link>
      <Link to='/usuario/help'>PRECISO DE AJUDA</Link>
      <Link to='/' onClick={handleLogout} >SAIR</Link>
      
      </div>
  )

}
export default BarraLateralCliente;