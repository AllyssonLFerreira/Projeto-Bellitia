import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateralCliente from "../../../Components/Cards/NavBarClient";
import styles from "../../Views.module.css"
import MeusAgendamentos from '../../../Components/Cards/MeusAgendamentos'

const MeusHorarios = () => {
    return (
        <div className={styles.view_container}>
          <Header />
          <div className={styles.grid_flex}>
            <BarraLateralCliente />
          
           <MeusAgendamentos />
          
            
          </div>
          <Footer />
        </div>
      )
}
export default MeusHorarios;