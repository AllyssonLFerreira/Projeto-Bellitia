import styles from "./Components/Buttons/BtnLayout.module.css";
import { useState } from "react/cjs/react.development";

 const Teste = () => {
    const [isChecked, setChecked] = useState(false);
    // Usar State para checar toggle (começando em false) //
   console.log('is checked', isChecked)
   // Chama o State, checa e muda para o oposto //  
   const handleChecked = () =>{
       setChecked((prevState) => !prevState)
   }
   
   
   
   return (
       <div className={styles.container}>
           <label className={styles.container_label} >
                <input className={styles.magic_input} type='checkbox' onClick={handleChecked} />
                <span className={styles.magic_span} />
           </label>
           <h1> {isChecked ? 'Checado' : 'Não Checado'} </h1>
       </div>
   )
 }

 export default Teste;