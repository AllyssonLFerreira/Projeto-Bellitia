import Calendar from 'react-calendar';
import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import Agendamentos from "../../../Components/Cards/Agendamentos";
import styles from "../../Views.module.css"



const HomeEstablishment = () => {
    return (
    <div className={styles.view_container}>
        <Header />
        <div className={styles.grid_flex}>
          <BarraLateral />
          <div className={styles.calendar}>
            <h2>Minha Agenda:</h2>
            <Calendar className={[styles.props]} />
          </div>
          <Agendamentos />
        </div>
        <Footer />
    </div>
    ); 
}

export default HomeEstablishment;