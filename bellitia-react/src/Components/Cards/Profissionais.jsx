import React from 'react';
import styles from "./cardProps.module.css"
import { Link } from "react-router-dom";



const Profissionais = (props) =>{

    return (
        <div>
          <div className={styles.establishmentCard}> 
           <img src='https://cdn-icons-png.flaticon.com/512/126/126486.png'></img>
            <div className={styles.establishmentData}>
                <h1>{props.profissional.Nome}</h1>
                
                       
                <button><Link to='/horarios'>Agendar com Profisional</Link></button>
                
                
                  </div>
               

       </div>
       
     </div>

      
   )

    }
export default Profissionais;