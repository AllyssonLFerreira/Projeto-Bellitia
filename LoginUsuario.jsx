import React from 'react';
import FormularioUsuario from './FormularioUsuario.jsx';
import './FormularioUsuario.css';
import Header from '../../Components/Cards/Header.jsx';
import Footer from '../../Components/Cards/Footer.jsx';
import './LoginUsuario.css';


const LoginUsuario = () => {
	return(
		<div>
			<Header />
			<FormularioUsuario />
			<div className='botaoCadastro'>
				<span><p>Não possui cadastro?</p></span>
				<button className='inscreva'>Inscreva-se</button>
			</div>
			<Footer />
		</div>
	)
};

export default LoginUsuario;