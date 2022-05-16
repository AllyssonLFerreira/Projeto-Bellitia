import React from 'react';
import FormularioLogin from './FormularioLogin';
import Header from '../../Components/Cards/Header.jsx';
import Footer from '../../Components/Cards/Footer.jsx';
import './Styles.css';

const Login = () => {
    return (
        <div className='login'>
            <Header />
            <FormularioLogin />
            <div className='botaoCadastro'>
                <span><p>Não possui cadastro?</p></span>
                <button className='inscreva'>Inscreva-se</button>
            </div>
            <Footer />
        </div>
    )
};

export default Login;