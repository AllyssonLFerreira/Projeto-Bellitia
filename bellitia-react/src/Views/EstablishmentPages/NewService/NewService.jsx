import './NewService.css';
import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import NovoServico from "../../../Components/Forms/NovoServico";
import TaskList from "../../../Components/Cards/TaskList";

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
