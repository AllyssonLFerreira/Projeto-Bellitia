/* import './CadastroEstabelecimento.css' */
import BtnConfirm from "../../../Components/Buttons/BtnConfirm"
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import styles from './Establishment.module.css'
/* import axios from 'axios'; */

export const CadastroEstabelecimento = () => {
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();
    const Send = (values) => {
        console.log(values)
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(Send)}>
                <div className= {styles.props}> 
                    <h2>Dados do Estabelecimento</h2>
                    <label htmlFor="razao_social"> 
                        Razão Social
                    <input 
                        type="text"
                        name="razao_social"
                        {...register('razao_social')} 
                        placeholder="Razão Social..."
                    />    
                    </label>
                    <label htmlFor="nome_fantasia">
                        Nome Fantasia
                    <input 
                        type="text"
                        name="nome_fantasia" 
                        {...register('nome_fantasia')} 
                        placeholder="Nome Fantasia LTDA"
                    />
                    </label>
                    <label htmlFor="cnpj">
                        CNPJ
                    <input 
                        type="text"
                        name="cnpj" 
                        {...register('cnpj')} 
                        placeholder="00-000.000/0001-00"
                    />
                    </label>
                    <label htmlFor="email">
                        Email do Estabelecimento
                    <input 
                        type="email"
                        name="email" 
                        {...register('email')} 
                        placeholder="exemplo@exemplo.com.br"
                    />
                    </label>    
                    <label htmlFor="telefone">
                        Telefone do Estabelecimento
                    <input 
                        type="tel"
                        name="telefone" 
                        {...register('telefone')} 
                        placeholder="(00) 9 0000-0000"
                    />
                    </label>
                </div>

                <div className= {styles.props}> 
                <h2>Endereço do Estabelecimento</h2>
                    <label htmlFor="logradouro">
                        Rua/Avenida
                    <input 
                        name="logradouro"
                        type="text" 
                        {...register('logradouro')} 
                        placeholder="avenida exemplo..."
                    />
                    </label>
                    <label htmlFor="numero">
                        Número
                    <input
                        name="numero" 
                        type="text" 
                        {...register('numero')} 
                        placeholder="123 ..."
                    />
                    </label>
                    <label htmlFor="complemento">
                        Complemento
                    <input 
                        name="complemento"
                        type="text" 
                        {...register('complemento')} 
                        placeholder="loja 05 galeria exemplo..."
                    />
                    </label>
                    <label htmlFor="bairro">
                        Bairro
                    <input
                        name="bairro" 
                        type="text" 
                        {...register('bairro')} 
                        placeholder=" Boa Vizinhança..."
                    />
                    </label>
                    <label htmlFor="cep">
                        Caixa Postal(CEP)
                    <input
                        name="cep" 
                        type="text" 
                        {...register('cep')} 
                        placeholder="12.345-678"
                    />
                    </label>
                    <label htmlFor="cidade">
                        Cidade
                    <input
                        name="cidade" 
                        type="text" 
                        {...register('cidade')} 
                        placeholder="Porto Alegre..."
                    />
                    </label>
                    <label htmlFor="uf">
                        Estado
                    <select
                        name="uf" 
                        {...register('uf')}> 
                            <option value="" disabled selected>Selecione</option>
                    </select>
                    </label>
                </div>
                
                <div className= {styles.props}> 
                <h2>Dados do Proprietário</h2>
                    <label htmlFor="nome">
                        Nome Completo
                    <input 
                        type="text"
                        name="nome" 
                        {...register('nome_proprietario')} 
                        placeholder="Digite aqui..."
                    />
                    </label>
                    <label htmlFor="cpf_proprietario">
                        Cadastro Pessoa Fisica(CPF)
                    <input 
                        type="text"
                        name="cpf_proprietario" 
                        {...register('cpf_proprietario')} 
                        placeholder="01234567890..." 
                    />
                    </label>
                    <label htmlFor="email_proprietario">
                        Email do Proprietário
                    <input 
                        type="email"
                        name="email_proprietario" 
                        {...register('email_proprietario')} 
                        placeholder="exemplo@exemplo..."
                    />
                    </label>
                    <label htmlFor="telefone">
                        Telefone do Proprietário
                    <input 
                        type="tel"
                        name="telefone" 
                        {...register('telefone')} 
                        placeholder="DDD + Número..."
                    />
                    </label>
                </div>
                <div className={styles.props}>
                <h2>Dados de Acesso</h2>
                    <label htmlFor="password">
                        Defina uma senha:
                    <input
                            type="password"
                            name="password" 
                        {...register('password')} 
                        placeholder="Minimo de 6 digitos..."
                    />
                    </label>
                    <label htmlFor="password_validate">
                        Repita a Senha:
                    <input  
                        type="password" 
                        {...register('password_validate')} 
                        placeholder="..."
                    />
                    </label>
                    <BtnConfirm />
                </div>  
            </form>
            </div> 
    )}