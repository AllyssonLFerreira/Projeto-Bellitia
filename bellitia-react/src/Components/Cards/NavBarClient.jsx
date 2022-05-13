import React from "react";
import { Link } from "react-router-dom";
import styles from "./cardProps.module.css";

const BarraLateralCliente = () =>{
  return (
    <div className={styles.NavBar}>
      <Link to='/areacliente'>MEUS AGENDAMENTOS</Link>
      <Link to='/novousuario'>ALTERAÇÃO DE DADOS</Link>
      <Link to='/usuario/help'>PRECISO DE AJUDA</Link>
      <Link to='/'>SAIR</Link>
    </div>
  )
}

export default BarraLateralCliente