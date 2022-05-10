import React from 'react';
import Header from '../../Components/Cards/Header'
import Footer from '../../Components/Cards/Footer'
import FormularioUsuario from './FormularioUsuario.jsx';
import styles from './LoginUsuario.module.css'


const LoginUsuario = () => {
	return(
		<div>
      <Header />

      <div className={styles.container}>
			
        <FormularioUsuario />
        <div className={styles.botaoCadastro}>
          <span><p>Não possui cadastro?</p></span>
          <button className={styles.inscreva}>Inscreva-se</button>
        </div>
      
      </div>

      <Footer />
		</div>
	)
};

export default LoginUsuario;