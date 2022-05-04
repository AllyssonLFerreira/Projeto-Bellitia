import React from "react";
import { Link } from "react-router-dom";
import './Barra-Lateral-Cliente.css'

const BarraLateralCliente = () =>{
  return (
    <div className='barra-lateral-cliente__links'>

      <Link to='#'>MEUS AGENDAMENTOS</Link>
      <Link to='/newuser'>ALTERAÇÃO DE DADOS</Link>
      <Link to='/user/help'>PRECISO DE AJUDA</Link>
      <Link to='#'>SAIR</Link>
      
      </div>
  )
}

export default BarraLateralCliente