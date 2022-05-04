import { useState } from "react";
import styles from './styles.module.css';

export const FormHelp = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const onSubmit = (e) => {
    const values = {name: name, description:description};
    e.preventDefault();
    console.log(values);
  }

  return (
    
    <div className={styles.container}>
        <form>
          <div className={styles.props}>
          <h2>Precisa de Ajuda ?</h2>
            <label htmlFor='name'>
              Digite seu Nome:
              <input id="name" name="name" type='text' placeholder='Nome Completo' />
            </label>
            <label htmlFor="Description">
              Relate aqui sua dúvida: 
            </label>
            <textarea id="Description" name="Description" placeholder='Descreva seu problema detalhadamente...' required />
            <button> Enviar </button>
          </div>
        </form>
        <div className={styles.contact}>
            <span>Se preferir, entre contato conosco nos seguintes canais:</span>
            <span>atendimento@bellitia.com.br</span>
            <span>financeiro@bellitia.com.br</span>
            <span>(11) 4003-8585</span>
            <span>(11) 9 9898-7878</span>
        </div>
      </div>
  )
}