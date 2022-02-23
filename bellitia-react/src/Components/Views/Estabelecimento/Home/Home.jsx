import react from "react";
import "./Home.css";
import Header from "../../Cards/Header";
import Footer from "../../Cards/Footer";
import BarraLateral from "../../Cards/Barra-Lateral";




const ViewHome = () => {
    return (
    <div className="viewHome">
        <Header />
        <BarraLateral />
        <Footer />
    </div>
    );
}

export default ViewHome;