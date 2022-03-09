import React from 'react';
import FormularioLogin from './FormularioLogin'

const Login = () => {
    return (
        <div className='login'>
            <FormularioLogin />
            <div className='botaoCadastro'>
                <span><p>Não possui cadastro?</p></span>
                <button>Inscreva-se</button>
            </div>
        </div>
    )
};

export default Login;