import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import BarraLateral from "../../../Components/Cards/Barra-Lateral";
import CadastroFuncionario from "../../../Components/Forms/CadastroFuncionario";
import BtnConfirm from "../../../Components/Buttons/BtnConfirm";
import './NewEmployee.css'



const NewEnployee = () => {
    return (
      <div className="View1">
        <Header />
        <div className="main3">
             <BarraLateral />
             <div className="formbtn">
             <CadastroFuncionario/>
             <BtnConfirm/>
             </div>
       
       </div>
              <Footer />
        
     </div>

  

    );
}

export default NewEnployee;