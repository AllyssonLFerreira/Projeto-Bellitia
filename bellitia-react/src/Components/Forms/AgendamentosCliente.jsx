import React from "react";
import './AgendamentosCliente.css'

const Formagenda = () => {
  
    return (
  
    <div className="bodyagendaclient">
      
      <h1><strong>Meus Agendamentos</strong></h1>

      <div className="subtituloAgendamento">
        <h2>Novo Agendamento</h2>
      </div>

      <div className="agendar">
        <div className="radio">
        
        <div>
        <input type="radio" name="estabelecimento" id="salãodebeleza"/>
        <label for="estabelecimento_salão de beleza">salão de beleza</label>
        </div>
        
        <div>
        <input type="radio" name="estabelecimento" id="barbearia"/>
        <label for="estabelecimento_barbearia">barbearia</label>
        </div>
        
        <div>
        <input type="radio" name="estabelecimento" id="clínica estética"/>
        <label for="estabelecimento_clínica estética">clínica estética</label>
        </div>
        </div>

        <div>
        <label for="estabelecimento">Estabelecimento:</label>
        <input type="text" name="estabelecimento" placeholder="Nome do estabelecimento" id="estabelecimento"/>
        </div>
        
        <div className="dataHorario">
        <div>
        <label for="data">Data:</label>
        <input type="date" name="data" id="data"/>
        </div>
        <div>
        <label for="horario">Horário:</label>
        <input type="time" name="horario" id="horario"/>
        </div>
        </div>

        <div className="servicosPrecos">
        <div>
        <label for="serviços">Serviços:</label>
        <input type="text" name="serviços" id="serviços"/>
        </div>
        <div>
        <label for="preço">Preço:</label>
        <input type="text" name="preço" id="preço"/>
        </div>
        </div>
      

      <div className="agendados">
          <div className="spanagendados">
          <span >Agendados</span>
          </div>
          <div>
          <label for="estabelecimento">Estabelecimento:</label>
          <input type="text"  placeholder="Nome do estabelecimento" id="estabelecimento"/>
          </div>

       <div className="dataHorario">
          <div>
            <label for="data">Data:</label>
            <input type="date" name="data" id="data"/>
          </div>
          <div>
            <label for="horario">Horário:</label>
            <input type="time" name="horario" id="horario"/>
          </div>
        </div>

        <div className="servicosPrecos">
          <div>
            <label for="serviços">Serviços:</label>
            <input type="text" name="serviços" id="serviços"/>
          </div>
          <div>
            <label for="preço">Preço:</label>
            <input type="text" name="preço" id="preço"/>
          </div>
        </div>

          <div>
          <label for="estabelecimento">Estabelecimento:</label>
          <input type="text"  placeholder="Nome do estabelecimento" id="estabelecimento"/>
          </div>


          <div className="dataHorario">
          <div>
            <label for="data">Data:</label>
            <input type="date" name="data" id="data"/>
          </div>
          <div>
            <label for="horario">Horário:</label>
            <input type="time" name="horario" id="horario"/>
          </div>
        </div>

        <div className="servicosPrecos">
         <div>
            <label for="serviços">Serviços:</label>
            <input type="text" name="serviços" id="serviços"/>
          </div>
          <div>
            <label for="preço">Preço:</label>
            <input type="text" name="preço" id="preço"/>
          </div>
        </div>


      </div>

    
       </div> 
       </div>
            
    )
}

export default Formagenda