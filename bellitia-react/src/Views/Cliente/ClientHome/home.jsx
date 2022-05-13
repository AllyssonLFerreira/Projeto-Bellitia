import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateralCliente from "../../../Components/Cards/NavBarClient";

import styles from "../../Views.module.css"

export const ClientHome = () => {
    return (
        <div className={styles.view_container}>
            <Header />
            <BarraLateralCliente />
            <Footer />
        </div>
    )
}