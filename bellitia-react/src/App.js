import React from "react";
import ViewHome from "./Components/Views/Estabelecimento/Home/Home";
import NewServiceCard from "./Components/Views/Estabelecimento/CadastroServicos/NewService";
import NewEstCard from "./Components/Views/Estabelecimento/CadastroEstabalecimento/NewEstablishment";
import CadastroFuncionario from "./Components/Views/Forms/CadastroFuncionario";
import NewEnployee from "./Components/Views/Estabelecimento/CadastroFuncionario/NewEmployee";

const App = () => {
  
  return (
    <div className="App">   
      {/* <ViewHome /> */}
      {/* <NewServiceCard />*/ }
      { /*<NewEstCard />*/ }
      <NewEnployee/>
    </div>
  );
}



export default App;