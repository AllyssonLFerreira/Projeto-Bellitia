import React from "react";
import ViewHome from "./Components/Views/Estabelecimento/Home/Home";
import NewServiceCard from "./Components/Views/Estabelecimento/CadastroServicos/NewService";
import NewEstCard from "./Components/Views/Estabelecimento/CadastroEstabalecimento/NewEstablishment";
import CadastroFuncionario from "./Components/Views/Forms/CadastroFuncionario";
import NewEnployee from "./Components/Views/Estabelecimento/CadastroFuncionario/NewEmployee";
import BarraLateralCliente from "./Components/Views/Cards/Barra-Lateral-Cliente";
import BarraLateral from "./Components/Views/Cards/Barra-Lateral";
import MeusAgendamentos from "./Components/Views/Cliente/Agendamentos/MeusAgendamentos";

const App = () => {
  
  return (
    <div className="App">   
      {/* <ViewHome /> */}
      {/* <NewServiceCard />*/ }
      { /*<NewEstCard />*/ }
      {/*<NewEnployee/>*/}
      <MeusAgendamentos/>
    </div>
  );
}



export default App;