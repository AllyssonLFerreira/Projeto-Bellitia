import React from 'react';
import './FormularioUsuario.css';
import Header from '../../Components/Cards/Header'
import Footer from '../../Components/Cards/Footer'
import FormularioUsuario from './FormularioUsuario.jsx';
import {Link} from 'react-router-dom';

const LoginUsuario = () => {
	return(
		<div className='Container'>
      <Header />
			<FormularioUsuario />
			<div className='botaoCadastro'>
				<span><p>Não possui cadastro?</p></span>
				<Link to='/novousuario'> Inscreva-se  </Link>
			</div>
      <Footer />
		</div>
	)
};

export default LoginUsuario;