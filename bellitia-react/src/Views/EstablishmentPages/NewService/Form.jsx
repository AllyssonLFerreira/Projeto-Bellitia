import BtnConfirm from '../../../Components/Buttons/BtnConfirm';
import {useForm} from 'react-hook-form';
import styles from './Styles.module.css'

export const NovoServico = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.props}>
                    <h2>Novo Serviço</h2>
                    <label htmlFor='description'>
                        Descrição do Serviço:
                    <textarea 
                        type='text' 
                        {...register('description')} 
                        placeholder='Especifique o serviço ofertado aqui ...'
                        required 
                    />
                    </label>
                    <label htmlFor='value'>
                        Valor Cobrado (R$)
                    <input 
                        type='text' 
                        {...register('value')} 
                        placeholder='99,99...' 
                    />
                    </label>
                    <div className={styles.radioProps}>

                        <label htmlFor='service_time'> 
                            Tempo aprox. de serviço? 
                    
                        <input 
                            type='radio' 
                            {...register('service-time')} 
                            value='30' 
                            />
                            <label> 30 min. </label>
                    
                        <input 
                            type='radio' 
                            {...register('service-time')} 
                            value='45' 
                            />
                            <label> 45 min. </label>
                        
                        <input 
                            type='radio' 
                            {...register('service-time')} 
                            value='60' 
                            />
                            <label> 1 hora. </label>
                        
                        <input 
                            type='radio' 
                            {...register('service-time')} 
                            value='90' 
                            />
                            <label> 1 hora e 30 min. </label>
                        
                        <input 
                            type='radio' 
                            {...register('service-time')} 
                            value='120' 
                            />
                            <label> 2 horas </label>
                        </label>
                    </div>
                    
                    <label htmlFor='profissional'>
                        Escolha um Profissional
                    <select {...register('professional')} id="profissionais">
                        <option selected disabled>Selecione</option>
                        <option value="F1">João</option>
                        <option value="F2">Maria</option>
                        <option value="F3"></option>
                        <option value="F4"></option>
                    </select>
                    </label>
                    <BtnConfirm />
                </div>
            </form>
        </div>
    );
}