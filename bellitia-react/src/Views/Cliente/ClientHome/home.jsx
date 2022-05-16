import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateralCliente from "../../../Components/Cards/NavBarClient";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import styles from "../../Views.module.css"

export const ClientHome = () => {
    return (
        <div className={styles.view_container}>
            <Header />
            <div className={styles.agenda}>
            <BarraLateralCliente />
                <div className={styles.calendario}>
                <Calendar />
                </div>
            </div>
            <Footer />
        </div>
    )
}