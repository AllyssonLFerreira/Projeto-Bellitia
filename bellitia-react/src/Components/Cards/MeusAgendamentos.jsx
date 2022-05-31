import React, { useEffect, useState } from 'react';
import axios from 'axios'



const MeusAgendamentos = () => {
    const [agendamentos, setAgendamentos] = useState([])
    

    useEffect(() =>{
        axios.get('http://localhost:5000/agendamentos')
            .then((response) => {
               setAgendamentos (response.data); 
              console.log(response.data);
            });

    }, []);

   
    
    return (
      <div>
          <h1>Meus agendamentos</h1>
          <table>
              <thead>
                  <tr>
              
                  </tr>
              </thead>
              <tbody>
              {agendamentos.map((agendamento) => 
                  <tr key={agendamento.id_schedules}>
                      <td>{ agendamento.especificacao }</td>
                      <td>{agendamento.profissional}</td>
                      <td>{agendamento.estabelecimento}</td>
                      <td>{agendamento.horario}</td>
                      <td>{agendamento.data}</td>
                  </tr>
              )}
              </tbody>
          </table>
            
      </div>
    )
}

export default MeusAgendamentos;