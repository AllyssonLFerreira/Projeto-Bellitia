import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import {CadastroFuncionario} from "./Form";
import styles from '../../Views.module.css'


export const NewEmployee = () => {
  return (
    <div className={styles.main}>
        <Header />
        <div className={styles.grid_flex}>
          <BarraLateral />
          <CadastroFuncionario/>
        </div>
        <Footer />    
    </div>
  );
}