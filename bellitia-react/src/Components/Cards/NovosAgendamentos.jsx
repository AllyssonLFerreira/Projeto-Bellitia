import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Estabelecimentos from './Estabelecimentos';

const NovosAgendamentos = () => {
    const [estabelecimentos, setEstabelecimentos] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/estabelecimento')
            .then((response) => {
               setEstabelecimentos (response.data); 
              console.log(response.data);
            });

    }, []);

   
    
    return (
      <div>
        {estabelecimentos.map((estabelecimento) => (
          <Estabelecimentos  key={estabelecimento.id_establishment} estabelecimento={estabelecimento} />
        ))}

      

      </div>
    )
}

export default NovosAgendamentos;