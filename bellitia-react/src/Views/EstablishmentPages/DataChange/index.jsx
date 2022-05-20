import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import {Form} from "./form";
import styles from "../../Views.module.css"



export const DataChange = () => {
    return (
    <div className={styles.view_container}>
        <Header />
        <div className={styles.grid_flex}>
          <BarraLateral />
          <Form />
        </div>
        <Footer />
    </div>
    );
}