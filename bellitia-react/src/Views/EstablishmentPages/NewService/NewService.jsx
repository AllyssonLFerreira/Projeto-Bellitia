import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import { NovoServico } from "./Form";
import styles from './Styles.module.css'

const NewServiceCard = () => {
    return (
    <div className={styles.container}>
        <Header />
    <div className={styles.main}>
            <BarraLateral />
        <div className={styles.newService}>
            <NovoServico />
        </div>
    </div>
        <Footer />
    </div>
    );
}

export default NewServiceCard;
