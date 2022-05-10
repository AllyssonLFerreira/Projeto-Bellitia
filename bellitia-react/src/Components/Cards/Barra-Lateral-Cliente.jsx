import React from "react";
import { Link } from "react-router-dom";
import './Barra-Lateral-Cliente.css'

const BarraLateralCliente = () =>{
  return (
    <div className='barra-lateral-cliente__links'>

      <Link to='/areacliente'>MEUS AGENDAMENTOS</Link>
      <Link to='/novousuario'>ALTERAÇÃO DE DADOS</Link>
      <Link to='/usuario/help'>PRECISO DE AJUDA</Link>
      <Link to='/'>SAIR</Link>
      
      </div>
  )
}

export default BarraLateralCliente