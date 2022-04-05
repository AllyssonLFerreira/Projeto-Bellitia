import Footer from "../../../Cards/Footer";
import Header from "../../../Cards/Header";
import BarraLateral from "../../../Cards/Barra-Lateral";
import styles from "../viewProp.module.css"



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