import react from "react"
import './CadastroFuncionario.css'

const CadastroFuncionario = () =>{
    return (
     
       <main>
     <title>Cadastro de Novo Funcionário</title>
    
     
        <section class="container">
                   
            <form action="">
                
                <section class="column-group">
                    <div class="form-group">
                        <h1 class="tittle-form">Dados do Funcionário</h1>
                        
                        <label for="name">Nome Completo</label>
                        <input type="text" id="name" placeholder="Escreva Aqui"/>

                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Escreva Aqui"/>

                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" placeholder="DDD + Número"/>

                        <label for="age">Data de Nascimento</label>
                        <input type="date" id="age"/>

                        <h1 class="tittle-form">Definições de Acesso</h1>

                        <label for="user">Nome de Usuário</label>
                        <input type="text" id="user" placeholder="Escreva Aqui" required/>

                        <label for="senha">Defina sua senha</label>
                        <input type="password" id="senha" placeholder="Escreva Aqui" required/>

                        <label for="cargo">Cargo/Area</label>
                        <select id="cargo" name="cargo" required>
                                <option value="" disabled selected>Selecione</option>
                                <option value="recepção/adm">Recepcionista</option>
                                <option value="operacional">Esteticista</option>
                                <option value="operacional">Barbeiro(a)</option>
                                <option value="operacional">Cabeleireiro(a)</option>
                                <option value="gerencia/adm">Gerente</option>
                                <option value="gerencia/adm">Financeiro</option>
                                <option value="Executivo">Sócio(a)/Propriétário(a)</option>
                        </select>   
                    </div>
                    <div class="form-group">
                        <h1 class="tittle-form">Endereço do Funcionário</h1>

                        <label for="logradouro">Logradouro/Rua</label>
                        <input type="text" id="logradouro" placeholder="Escreva Aqui" required/>

                        <label for="numero">Número</label>
                        <input type="text" id="numero" placeholder="Escreva Aqui" required/>

                        <label for="comp">Complemento</label>
                        <input type="text" id="numero" placeholder="Escreva Aqui"/>

                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" placeholder="Escreva Aqui" required/>

                        <label for="cep">CEP</label>
                        <input type="text" id="cep" minlength="8" maxlength="8" placeholder="Apenas Números" required/>

                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" placeholder="Escreva Aqui" required/>

                        <label for="estado">Estado</label>
                        <select id="estado" name="estado" required>
                                <option value="" disabled selected>Selecione</option>
                                <option value="AC">ACRE</option>
                                <option value="AL">ALAGOAS</option>
                                <option value="AP">AMAPÁ</option>
                                <option value="AM">AMAZONAS</option>
                                <option value="BA">BAHIA</option>
                                <option value="CE">CEARÁ</option>
                                <option value="DF">DISTRITO FEDERAL</option>
                                <option value="ES">ESPÍRITO SANTO</option>
                                <option value="GO">GOÍAS</option>
                                <option value="MA">MARANHÃO</option>
                                <option value="MT">MATO GROSSO</option>
                                <option value="MS">MATO GROSSO DO SUL</option>
                                <option value="MG">MINAS GERAIS</option>
                                <option value="PA">PARÁ</option>
                                <option value="PB">PARAÍBA</option>
                                <option value="PR">PARANÁ</option>
                                <option value="PE">PERNAMBUCO</option>
                                <option value="PI">PIAUÍ</option>
                                <option value="RJ">RIO DE JANEIRO</option>
                                <option value="RN">RIO GRANDE DO NORTE</option>
                                <option value="RS">RIO GRANDE DO SUL</option>
                                <option value="RO">RONDÔNIA</option>
                                <option value="RR">RORAIMA</option>
                                <option value="SC">SANTA CATARINA</option>
                                <option value="SP">SÃO PAULO</option>
                                <option value="SE">SERGIPE</option>
                                <option value="TO">TOCANTINS</option>
                        </select>
                    </div>
                  </section>
                 </form>
                 </section>
                </main>
                
                 )
                }

 export default CadastroFuncionario