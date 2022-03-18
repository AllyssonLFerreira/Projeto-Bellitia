import React from "react";
import './Barra-Lateral-Cliente.css'

const BarraLateralCliente = () =>{
    return (
        <div className='barra-lateral-cliente__links'>
            <nav>
                <ul className='barra-lateral-clientes_links'>
                <li><a href="TelaPosLogin.html">MINHA BUSCA</a></li>
                <li><a href="MeusDados.html">MEUS DADOS</a></li>
                <li><a href="Agendamentos.html">MEUS AGENDAMENTOS</a></li>
                <li><a href="Historico.html">HISTÓRICO</a></li>
                <li><a href="Ajuda.html">PRECISO DE AJUDA</a></li>
                <li><a href="../homeEstabelecimento/index.html">SAIR</a></li>
                </ul>
            </nav>
         </div>
    )
}

export default BarraLateralCliente