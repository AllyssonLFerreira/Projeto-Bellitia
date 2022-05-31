import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Profissionais from './Profissionais';

const ProfissionaisAgenda = () => {
    const [profissionais, setProfissionais] = useState([]);
    const [services, setServices] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/professional')
            .then((response) => {
               setProfissionais (response.data); 
              console.log(response.data);
            });
        
            axios.get('http://localhost:5000/servico')
            .then((response) => {
               setServices (response.data); 
              console.log(response.data);
            });

    }, []);

   



    return (
      <div>
        {profissionais.map((profissional) => (
          <Profissionais key={profissional.id_professional} profissional={profissional} />
        ))}
   
        
      </div>
      

    )
}

export default ProfissionaisAgenda;