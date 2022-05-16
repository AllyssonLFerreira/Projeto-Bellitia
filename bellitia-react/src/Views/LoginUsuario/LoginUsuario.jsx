import React from 'react';
import styles from "./LoginUsuario.module.css"
import FormularioUsuario from './FormularioUsuario.jsx';
import {Link} from 'react-router-dom';


const LoginUsuario = () => {
	return(
		<div>
 
			<FormularioUsuario />
			<div className='botaoCadastro'>
				<span><p>Não possui cadastro?</p></span>
				<Link to='/novousuario'>
					<button className={styles.inscreva}>Inscreva-se</button>
					</Link>
			</div>
      
      
 

    
		</div>
	)
};

export default LoginUsuario;