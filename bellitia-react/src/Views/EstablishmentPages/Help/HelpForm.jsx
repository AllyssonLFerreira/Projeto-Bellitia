import BtnConfirm from "../../../Components/Buttons/BtnConfirm"
import { useForm } from "react-hook-form";
import styles from "./Help.module.css"

export const HelpForm = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2>Precisa de Ajuda ?</h2>
                
                <div className={styles.row}>
                    <label htmlFor='name'>Digite seu Nome:</label>
                    <input 
                    {...register('name')} 
                    type='text'
                    placeholder='Nome Completo' />
                </div>
                
                <div className={styles.row}>
                    <label htmlFor="Problem_Description">Relate aqui seu dúvida: </label>
                    <textarea 
                    {...register('Problem_Description')}  
                    type='text' 
                    placeholder='Descreva seu problema detalhadamente...'
                    required />
                </div>
                
                <div className={styles.row}>
                    <BtnConfirm />
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
    );
}
