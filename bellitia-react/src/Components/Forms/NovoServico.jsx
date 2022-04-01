import { useForm } from 'react-hook-form';
import './NovoServico.css';
import BtnConfirm from "../Buttons/BtnConfirm";

const NovoServico = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2>Novo Serviço</h2>
                <div className="row_block">
                    <label htmlFor='description'>Descrição do Serviço:</label>
                    <textarea type='text' {...register('description')} placeholder='Especifique o serviço ofertado aqui ...'required />
                </div>
                <div className="row_block ">
                    <label htmlFor='value'>Valor Cobrado (R$):</label>
                    <input type='text' {...register('value')} placeholder='99,99...' />
                </div>
                <div className="row_block">
                    <label htmlFor='service_time'> Tempo aprox. de serviço? </label>
                    <div className="radio_prop">
                        <input type='radio' {...register('service-time')} value='30' />
                        <label > 30 min. </label>
                    </div>
                    <div className="radio_prop">
                        <input type='radio' {...register('service-time')} value='45' />
                        <label> 45 min. </label>
                    </div>
                    <div className="radio_prop">
                        <input type='radio' {...register('service-time')} value='60' />
                        <label> 1 hora. </label>
                    </div>
                    <div className="radio_prop">
                        <input type='radio' {...register('service-time')} value='90' />
                        <label> 1 hora e 30 min. </label>
                    </div>
                    <div className="radio_prop">
                        <input type='radio' {...register('service-time')} value='120' />
                        <label> 2 horas </label>
                    </div>
                </div>
                <div className="row_block">
                    <label htmlFor='profissional'>Escolha um Profissional:</label>
                    <select {...register('professional')} id="profissionais">
                        <option selected disabled>Selecione</option>
                        <option value="F1">João</option>
                        <option value="F2">Maria</option>
                        <option value="F3"></option>
                        <option value="F4"></option>
                    </select>
                </div>
                <div className='row_block'>
                    <BtnConfirm />
                </div>
            </form>
        </div>
    );
}

export default NovoServico;