import React from "react";
import Header from "./Components/Views/Cards/Header";
import Footer from "./Components/Views/Cards/Footer";
import BarraLateral from "./Components/Views/Cards/Barra-Lateral";



const App = () => {
  
  return (
    <div className="App">   
      <Header />
      <BarraLateral />
      <Footer />
    </div>
  );
}



export default App;