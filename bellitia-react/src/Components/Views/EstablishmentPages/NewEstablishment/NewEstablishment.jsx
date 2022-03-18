import react from "react";
import "./NewEstablishment.css";
import Header from "../../../Cards/Header";
import Footer from "../../../Cards/Footer";
import CadastroEstabelecimento from "../../../Forms/CadastroEstabelecimento";

const NewEstCard = () => {
    return (
        <div className="View">
            <Header />
            <CadastroEstabelecimento />
            <Footer />
        </div>
    );
} 

export default NewEstCard;