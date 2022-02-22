import react from "react";
import './CadastroEstabelecimento.css'
import BtnConfirm from "../Buttons/BtnConfirm";

const CadastroEstabelecimento = () => {
    return (
        <div className='container'>
            <form>
                <h3>Dados do Estabelecimento:</h3>
                <div className="row">
                    <div className="field_prop">
                        <label for="rSocial">Razão Social:</label>
                        <input className="" type="text" name="rSocial" placeholder="Razão Social..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="">Nome Fantasia:</label>
                        <input className="nFantasia" type="text" name="nFantasia" placeholder="Nome Fantasia..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="cnpj">CNPJ:</label>
                        <input className="" type="number" name="cnpj" 
                        placeholder="Somente números..."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label for="email">Email do Estabelecimento:</label>
                        <input className="" type="email" name="email" placeholder="exemplo@exemplo..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="tel">Telefone do Estabelecimento:</label>
                        <input className="" type="tel" name="tel" placeholder="DDD + Número..."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label for="logradouro">Rua/Avenida:</label>
                        <input className="" type="text" name="logradouro" placeholder="avenida exemplo..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="number">Número:</label>
                        <input className="" type="text" name="number" placeholder="123 ..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="comp">Complemento:</label>
                        <input className="" type="text" name="comp" 
                        placeholder="loja 05 galeria exemplo..."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label for="bairro">Bairro:</label>
                        <input className="" type="text" name="bairro" placeholder="avenida exemplo..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="cep">Caixa Postal(CEP):</label>
                        <input className="" type="text" name="cep" placeholder="123456789..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="city">Cidade:</label>
                        <input className="" type="text" name="city" 
                        placeholder="Porto Alegre..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="estado">Estado:</label>
                        <select className="estado" name="estado">
                            <option value="" disabled selected>Selecione</option>
                        </select>
                    </div>
                </div>
                <h3>Dados do Proprietário:</h3>
                <div className="row">
                    <div className="field_prop">
                        <label for="name">Nome Completo:</label>
                        <input className="" type="text" name="name" placeholder="Digite aqui..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="rg">Registro Geral(RG):</label>
                        <input className="" type="number" name="rg" placeholder="02123456789..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="cpf">Cadasro Pessoa Fisica(CPF):</label>
                        <input className="" type="number" name="cpf" 
                        placeholder="01234567890..."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="field_prop">
                        <label for="nascimento">Data de Nascimento:</label>
                        <input className="" type="date" name="nascimento" placeholder="01/01/2021..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="email">Email do Proprietário:</label>
                        <input className="" type="email" name="email" placeholder="exemplo@exemplo..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="tel">Telefone do Proprietário:</label>
                        <input className="" type="tel" name="tel" placeholder="DDD + Número..."></input>
                    </div>
                </div>
                <h3>Dados de Acesso:</h3>
                <div className="row">
                    <div className="field_prop">
                        <label for="email">Email do Estabelecimento:</label>
                        <input className="" type="email" name="email" placeholder="exemplo@exemplo..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="password">Defina uma senha:</label>
                        <input className="" type="password" name="password" placeholder="Minimo de 6 digitos..."></input>
                    </div>
                    <div className="field_prop">
                        <label for="password_validate">Repita a Senha:</label>
                        <input className="" type="password" name="password_validate" placeholder="..."></input>
                    </div>
                </div>
                <div className="">
                <input type='checkbox' name='user_terms' required></input>
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