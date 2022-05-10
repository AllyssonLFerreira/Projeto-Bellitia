import React from 'react';
import FormularioLogin from './FormularioLogin'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <FormularioLogin />
            <div className='botaoCadastro'>
                <span><p>Não possui cadastro?</p></span>
                <Link to="/novoestabelecimento">Inscreva-se</Link>
            </div>
        </div>
    )
};

export default Login;