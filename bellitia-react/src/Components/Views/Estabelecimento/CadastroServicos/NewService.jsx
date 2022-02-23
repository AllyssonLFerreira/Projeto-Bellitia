import react from "react";
import './NewService.css';
import Header from '../../Cards/Header';
import Footer from '../../Cards/Footer';
import BarraLateral from '../../Cards/Barra-Lateral';
import NovoServico from '../../Forms/NovoServico';
import TaskList from "../../Cards/TaskList";

const NewServiceCard = () => {
    return (
    <div>
        <Header />
    <div className="main_card">
        <BarraLateral />
        <NovoServico />
        <TaskList />
    </div>
        <Footer />

    </div>

    );
}

export default NewServiceCard;
