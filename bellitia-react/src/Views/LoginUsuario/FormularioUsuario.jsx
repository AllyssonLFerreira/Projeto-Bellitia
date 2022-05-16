import React, { useState } from 'react';
import './FormularioUsuario.css';
import '../Login/Botao.css';
import img from '..//Login/Imagens/login-user.png'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';




const FormularioLogin =  () => {
	const [Email, setEmailInput] = useState('');
	const [senhaInput, setSenhaInput] = useState('');
	// const [ userInput, setUserInput ] = useState({
	// 	loginInput: '',
	// 	senhaInput: ''
	// });


	
	const navigate = useNavigate()

	const loginChangeHandler = (event) => {
	 setEmailInput(event.target.value);
		// setUserInput((prevState) => {
		// 	return{...prevState, loginInput: event.target.value};
		// })
	};

	const senhaChangeHandler = (event) => {
		setSenhaInput(event.target.value);
		// setUserInput((prevState) => {
		// 	return{...prevState, senhaInput: event.target.value};
		// })
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		const dadosLoginUser = {
			Email: Email,
			senha: senhaInput
		};

		try {
			const response = await axios.post('http://localhost:5000/usuarios/login', dadosLoginUser)
			

			document.cookie = `dadosLoginUser=${response.data.token};expires=${new Date(2100, 0, 1)}`

			alert('Login efetuado!')

			navigate('/areacliente')

		} catch (error){
			
			alert(error.response.data)
			
		}

	};

	return(
		<form className='formulario' onSubmit={submitHandler}>
			<div className='loginEmpresa'>
				<p><img src={img} /></p>
				<div className='form-group'>
					<label>Login</label>
					<input 
					type="email" 
					id='login'
				    placeholder='Login' 
					value={Email} 
					onChange={loginChangeHandler} />
				</div>
				<div className='form-group'>
					<label>Senha</label>
					<input 
					type="password" 
					id='senha' 
					placeholder='Digite sua senha' 
					value={senhaInput} 
					onChange={senhaChangeHandler}/>
				</div>
			</div>
			<button className='entrar' onClick={event =>submitHandler(event)}>Entrar</button>
		</form>
	);
}

export default FormularioLogin;