import './CadastroEstabelecimento.css'
import BtnConfirm from "../Buttons/BtnConfirm";
import { useForm } from 'react-hook-form';

const CadastroEstabelecimento = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }
    
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Dados do Estabelecimento:</h3>
                <div className="row">
                    <div className="field_prop">
                        <label htmlFor="rSocial">Razão Social:</label>
                        <input type="text" {...register('rSocial')} placeholder="Razão Social..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="nFantasia">Nome Fantasia:</label>
                        <input type="text" {...register('nFantasia')} placeholder="Nome Fantasia LTDA"/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="cnpj">CNPJ:</label>
                        <input type="text" {...register('cnpj')} placeholder="00-000.000/0001-00"/>
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label htmlFor="email">Email do Estabelecimento:</label>
                        <input type="email" {...register('email')} placeholder="exemplo@exemplo.com.br"/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="telefone">Telefone do Estabelecimento:</label>
                        <input type="tel" {...register('telefone')} placeholder="(00) 9 0000-0000"/>
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label htmlFor="logradouro">Rua/Avenida:</label>
                        <input type="text" {...register('logradouro')} placeholder="avenida exemplo..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="adressNumber">Número:</label>
                        <input type="text" {...register('adressNumber')} placeholder="123 ..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="comp">Complemento:</label>
                        <input type="text" {...register('comp')} placeholder="loja 05 galeria exemplo..."/>
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" {...register('bairro')} placeholder=" Boa Vizinhança..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="cep">Caixa Postal(CEP):</label>
                        <input type="text" {...register('cep')} placeholder="12.345-678"/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="city">Cidade:</label>
                        <input type="text" {...register('city')} placeholder="Porto Alegre..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="estado">Estado:</label>
                        <select className="estado" {...register('estado')}>
                            <option value="" disabled selected>Selecione</option>
                        </select>
                    </div>
                </div>
                <h3>Dados do Proprietário:</h3>
                <div className="row">
                    <div className="field_prop">
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" {...register('rSocial')} placeholder="Digite aqui..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="cpf">Cadasro Pessoa Fisica(CPF):</label>
                        <input type="text" {...register('cpf')} placeholder="01234567890..." />
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label htmlFor="hostEmail">Email do Proprietário:</label>
                        <input type="email" {...register('hostEmail')} placeholder="exemplo@exemplo..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="hostTelefone">Telefone do Proprietário:</label>
                        <input type="tel" {...register('hostTelefone')} placeholder="DDD + Número..."/>
                    </div>
                </div>
                <h3>Dados de Acesso:</h3>
                <div className="row">
                    <div className="field_prop">
                        <label htmlFor="email">Email do Estabelecimento:</label>
                        <input type="email" {...register('email')} placeholder="exemplo@exemplo..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="password">Defina uma senha:</label>
                        <input type="password" {...register('password')} placeholder="Minimo de 6 digitos..."/>
                    </div>
                    <div className="field_prop">
                        <label htmlFor="password_validate">Repita a Senha:</label>
                        <input  type="password" {...register('password_validate')} placeholder="..."/>
                    </div>
                </div>
                <div className="">
                <input type='checkbox' name='user_terms' required/>
                <label className="user_terms"> Li e estou de acordo com o 
                    <a href=""> Termo de Uso e Politica de Privacidade
                    </a>
                </label>
                <BtnConfirm />
                </div>
            </form>
        </div>
    );
}

export default CadastroEstabelecimento;