import React, { useState } from 'react';
import './FormularioLogin.css';
import './Botao.css';
import img from './Imagens/login-user.png';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormularioLogin = () => {
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	// const [ userInput, setUserInput ] = useState({
	// 	estabelecimentoInput: '',
	// 	loginInput: '',
	// 	senhaInput: ''
	// });

	const navigate = useNavigate()

	const handleLogin = async (event) => {
			event.preventDefault()
		
			const dadosLogin = {
			email: email,
			senha: pwd,
		}

		try {
			const response = await axios.post('http://localhost:5000/estabelecimento/login', dadosLogin)
			

			document.cookie = `dadosLogin=${response.data.token};expires=${new Date(2100, 0, 1)}`

			alert('Login efetuado!')

			navigate('/estabelecimento')

		} catch (error){
			
			alert(error.response.data)
			
		}
	}

       

	return(
		<form className='formulario' >
			<div className='loginEmpresa'>
				<p><img src={img} /></p>
			
				<div className='form-group'>
					<label>Login</label>
					<input 
					 id='email'
					 type="text"
					 placeholder='E-mail' 
					 value={email}
					 onChange={e => setEmail(e.target.value)} />
				</div>
				<div className='form-group'>
					<label>Senha</label>
					<input 
					type="password" 
					id='pwd' 
					placeholder='Digite sua senha' 
					value={pwd} 
					onChange={e => setPwd(e.target.value)}/>
				</div>
			</div>
			<button className='entrar' onClick={e => handleLogin(e)}>Entrar</button>
		</form>
	);
}

export default FormularioLogin;