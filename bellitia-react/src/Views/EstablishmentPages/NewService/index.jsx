import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import { NovoServico } from "./Form";
import styles from '../../Views.module.css'

const NewServiceCard = () => {
    return (
    <div className={styles.container_column}>
      <Header />
      <div className={styles.grid_flex}>
        <BarraLateral />
        <NovoServico />
      </div>
        <Footer />
    </div>
    );
}

export default NewServiceCard;
