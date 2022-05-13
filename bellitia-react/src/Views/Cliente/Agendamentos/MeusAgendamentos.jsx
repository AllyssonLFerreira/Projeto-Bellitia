import React from "react";
import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateralCliente from "../../../Components/Cards/NavBarClient";
import Formagenda from "../../../Components/Forms/AgendamentosCliente";
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