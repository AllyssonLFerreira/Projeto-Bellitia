import "./NewEstablishment.css";
import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import CadastroEstabelecimento from "../../../Components/Forms/CadastroEstabelecimento";

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