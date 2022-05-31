import React from 'react';
import styles from "./cardProps.module.css"
import { Link } from "react-router-dom";

const Estabelecimentos = (props) =>{

 


    return (
        <div>
        
        
     
    <div className={styles.establishmentCard}> 
       <img src='https://s2.glbimg.com/Ha2q-YYa3pCWtwM4E51zi_p-POI=/940x523/e.glbimg.com/og/ed/f/original/2019/02/20/blow-dry-bar-del-mar-chairs-counter-853427.jpg'></img>
            <div className={styles.establishmentData}>
                <h1>{props.estabelecimento.nome_fantasia}</h1>

               
                
                <button><Link to='/agendamentos'>Agendar horário</Link></button>
                

                  </div>

       </div>
       
     </div>

      
   )

    }
export default Estabelecimentos;