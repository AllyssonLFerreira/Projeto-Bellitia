import React from 'react';
import styles from './styles.module.css';
import Header from '../../Components/Cards/Header';
import Footer from '../../Components/Cards/Footer';
import FormularioLogin from './FormularioLogin'

const Login = () => {
    return (
      <div className='login'>
        <Header />
        <FormularioLogin />
        <div className='botaoCadastro'>
            <span><p>Não possui cadastro?</p></span>
            <button className={styles.inscreva}>Inscreva-se</button>
        </div>
        <Footer />
      </div>
    )
};

export default Login;