import React from "react";
import Header from "./Components/Views/Header";
import Footer from "./Components/Views/Footer";
import BarraLateral from "./Components/Views/Barra-Lateral";



const App = () => {
  
  return (
    <div className="App">   
      <Header></Header>
      <BarraLateral></BarraLateral>
      <Footer></Footer>
    </div>
  );
}



export default App;