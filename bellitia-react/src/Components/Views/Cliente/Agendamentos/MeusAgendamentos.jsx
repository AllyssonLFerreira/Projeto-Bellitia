import React from "react";
import Footer from "../../../Cards/Footer";
import Header from "../../../Cards/Header";
import BarraLateralCliente from "../../../Cards/Barra-Lateral-Cliente";
import Formagenda from "../../../Forms/AgendamentosCliente";
import './MeusAgendamentos.css'

const MeusAgendamentos = () =>{
    return (
            <div >
                 <Header/>
           <div className="Midle">
                <BarraLateralCliente/>
                <Formagenda/>
            </div>
                 <Footer/>
            </div>       
    )
}

export default MeusAgendamentos