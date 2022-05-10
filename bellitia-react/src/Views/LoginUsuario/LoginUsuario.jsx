import React from 'react';
import FormularioUsuario from './FormularioUsuario.jsx';
import './FormularioUsuario.css'
import {Link} from 'react-router-dom';


const LoginUsuario = () => {
	return(
		<div>
			<FormularioUsuario />
			<div className='botaoCadastro'>
				<span><p>Não possui cadastro?</p></span>
				<Link to="/novousuario">Inscreva-se</Link>
			</div>
		</div>
	)
};

export default LoginUsuario;