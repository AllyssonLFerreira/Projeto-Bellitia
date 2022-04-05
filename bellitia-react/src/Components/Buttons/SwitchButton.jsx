import { useState } from "react/cjs/react.development";
import styles from "./BtnLayout.module.css";

const SwitchButton = () => {
    const [isChecked, setChecked] = useState(false);
    // Usar State para checar toggle (começando em false) //
   console.log('is checked', isChecked)
   // Chama o State, checa e muda para o oposto //  
   const handleChecked = () =>{
       setChecked((prevState) => !prevState)
   }

   return (
       <div>
           <p className={styles.switch_p}> {isChecked ? 'Estabelecimento Aberto' : 'Abrir Estabelecimento'} </p>
           <label className={styles.switch_container} >
                <input className={styles.switch_input} type='checkbox' onClick={handleChecked} />
                <span className={styles.switch_span} />
           </label>
       </div>
   )
}

export default SwitchButton;