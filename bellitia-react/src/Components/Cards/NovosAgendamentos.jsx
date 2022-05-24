import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../Cards/cardProps.module.css';
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
          <Estabelecimentos estabelecimento={estabelecimento} />
        ))}

      

      </div>
    )
}

export default NovosAgendamentos;