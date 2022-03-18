import react from "react";
import Header from "../../../Cards/Header";
import Footer from "../../../Cards/Footer";
import BarraLateral from "../../../Cards/Barra-Lateral";
import CadastroFuncionario from "../../../Forms/CadastroFuncionario";
import BtnConfirm from "../../../Buttons/BtnConfirm";
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