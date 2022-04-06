import Footer from "../../../Components/Cards/Footer";
import Header from "../../../Components/Cards/Header";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import styles from "../../viewProp.module.css"



const HomeEstablishment = () => {
    return (
    <div className={styles.view_container}>
        <Header />
        <BarraLateral />
        <Footer />
    </div>
    );
}

export default HomeEstablishment;