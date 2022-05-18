import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateralCliente from "../../../Components/Cards/NavBarClient";
import Calendar from 'react-calendar';


import styles from "../../Views.module.css"

export const ClientHome = () => {
  return (
    <div className={styles.view_container}>
        <Header />
        <div className={styles.grid_flex}>
          <BarraLateralCliente />
          <div className={styles.calendar}>
            <h2>Minha Agenda:</h2>
            <Calendar className={[styles.props]} />
          </div>
        </div>
        <Footer />
    </div>
  )
}