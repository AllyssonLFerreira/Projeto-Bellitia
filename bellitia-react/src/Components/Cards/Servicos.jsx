import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Profissionais from './Profissionais';



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/servico')
            .then((response) => {
               setServices (response.data); 
              console.log(response.data);
            });

    }, []);

   
    
    return (
      <div>
        {services.map((service) => (
          <Profissionais service={service} />
        ))}

      

      </div>
    )
}

export default Services;