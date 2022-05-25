import { useState } from "react";
import { MdOutlineLiveHelp, MdOutlineMarkEmailRead, MdOutlineAttachEmail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import axios from "axios";
import styles from "./styles.module.css"

export const HelpForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [descricao, setDescricao] = useState('');
    
    const onSubmit = async (e) => {
        const values = {nome: nome, email: email, descricao: descricao}
        e.preventDefault();
        try{
          const send = await axios.post('http://localhost:5000/ajuda/', values)
            .then(res => res.data)
             alert("Sucesso! Enviamos uma confirmação para o seu email")
        } catch(err) {
          alert(err.response.data)
        }
    }
    return (
        <div className={styles.container}>
            <form>
                <div className={styles.props}>
                  <div className={styles.icon}> <MdOutlineLiveHelp /> </div>
                  <span>Precisa de Ajuda ?</span>
                  <input type='text' required
                    placeholder='Nome Completo'
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)}/>
                  <div className={styles.underline}></div>
                  <input type='email' required
                    placeholder='Digite Seu Melhor Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                  <div className={styles.underline}></div>

                  <label htmlFor="Description"> Relate aqui sua dúvida: </label>
                  <textarea name="Description" required
                    placeholder='Descreva seu problema detalhadamente!' 
                    value={descricao}
                    onChange={(e)=>setDescricao(e.target.value)} />

                  <button className={styles.btnCfg} onClick={onSubmit}> Enviar </button>
                </div>
            </form>
            <div className={styles.contact}>
                <span> Se preferir, entre contato conosco nos seguintes canais:</span>
                <span> <MdOutlineMarkEmailRead /> atendimento@bellitia.com.br </span>
                <span> <MdOutlineAttachEmail /> financeiro@bellitia.com.br</span>
                <span> <BsTelephoneInbound /> (11) 4003-8585 </span>
                <span> <AiOutlineWhatsApp /> (11) 9 9898-7878 </span>
            </div>
        </div>
    );
}
