import React from "react";
import Header from "./Components/Views/Cards/Header";
import Footer from "./Components/Views/Cards/Footer";
import BarraLateral from "./Components/Views/Cards/Barra-Lateral";
import CadastroEstabelecimento from "./Components/Views/Forms/CadastroEstabelecimento";



const App = () => {
  
  return (
    <div className="App">   
      <Header />
      {/* <CadastroEstabelecimento /> */}
      <BarraLateral />
      <Footer />
    </div>
  );
}



export default App;