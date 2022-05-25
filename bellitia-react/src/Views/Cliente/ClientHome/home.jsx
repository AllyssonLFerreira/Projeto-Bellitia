//import Calendar from 'react-calendar';
import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateralCliente from "../../../Components/Cards/NavBarClient";
import NovosAgendamentos from "../../../Components/Cards/NovosAgendamentos"
import styles from "../../Views.module.css"

export const ClientHome = () => {
  return (
    <div className={styles.view_container}>
      <Header />
      <div className={styles.grid_flex}>
        <BarraLateralCliente />
       
        <NovosAgendamentos />
      </div>
      <Footer />
    </div>
  )
}