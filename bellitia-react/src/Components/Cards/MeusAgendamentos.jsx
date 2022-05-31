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
          <table>
              <thead>
                  <tr>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
              {agendamentos.map((agendamento) => 
                  <tr key={agendamento.id_schedules}>
                      <td>{ agendamento.servico }</td>
                  </tr>
              )}
              </tbody>
          </table>
            
      </div>
    )
}

export default MeusAgendamentos;