import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import { CadastroEstabelecimento } from "./EstablishmentForm";
import styles from '../../Views.module.css';

const NewEstCard = () => {
    return (
        <div className={styles.main}>
            <Header />
            <CadastroEstabelecimento />
            <Footer />
        </div>
    );
} 

export default NewEstCard;