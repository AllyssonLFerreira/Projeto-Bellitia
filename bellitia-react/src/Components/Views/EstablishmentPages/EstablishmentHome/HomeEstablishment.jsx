import react from "react";
import "./HomeEstablishment.css";
import Footer from "../../../Cards/Footer";
import Header from "../../../Cards/Header";
import BarraLateral from "../../../Cards/Barra-Lateral";




const HomeEstablishment = () => {
    return (
    <div className="viewHome">
        <Header />
        <BarraLateral />
        <Footer />
    </div>
    );
}

export default HomeEstablishment;