import React from 'react';
import FormularioUsuario from './FormularioUsuario.jsx';
import './FormularioUsuario.css'


const LoginUsuario = () => {
	return(
		<div>
			<FormularioUsuario />
			<div className='botaoCadastro'>
				<span><p>Não possui cadastro?</p></span>
				<button>Inscreva-se</button>
			</div>
		</div>
	)
};

export default LoginUsuario;