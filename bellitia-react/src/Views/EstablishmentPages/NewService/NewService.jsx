import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import { NovoServico } from "./Form";
import TaskList from "./TaskList";
import styles from './Styles.module.css'

const NewServiceCard = () => {
    return (
    <div className={styles.container}>
        <Header />
    <div className={styles.main}>
        <BarraLateral />
        <NovoServico />
        <TaskList />
    </div>
        <Footer />
    </div>
    );
}

export default NewServiceCard;
