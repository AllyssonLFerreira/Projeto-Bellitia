import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateralCliente from "../../../Components/Cards/NavBarClient";
//import Services from "../../../Components/Cards/Servicos";
import ProfissionaisAgenda from "../../../Components/Cards/ProfissionaisAgenda";



import styles from "../../Views.module.css"

export const ProfissionalAgendamento = () => {


     
  return (
    <div className={styles.view_container}>
      <Header />
      <div className={styles.grid_flex}>
        <BarraLateralCliente />
      
       <ProfissionaisAgenda />
      
        
      </div>
      <Footer />
    </div>
  )
}