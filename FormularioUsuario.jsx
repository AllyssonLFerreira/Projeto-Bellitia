import React, { useState } from 'react';
import './FormularioUsuario.css';
import '../Login/Botao.css';
import img from '..//Login/Imagens/login-user.png'


const FormularioLogin = () => {
	const [loginInput, setLoginInput] = useState('');
	const [senhaInput, setSenhaInput] = useState('');
	// const [ userInput, setUserInput ] = useState({
	// 	loginInput: '',
	// 	senhaInput: ''
	// });

	const loginChangeHandler = (event) => {
		setLoginInput(event.target.value);
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

	const submitHandler = (event) => {
		event.preventDefault();
		const dadosFormulario = {
			login: loginInput,
			senha: senhaInput
		};

		console.log(dadosFormulario);
		setLoginInput('');
		setSenhaInput('');
	};

	return(
		<form className='formulario' onSubmit={submitHandler}>
			<div className='loginEmpresa'>
				<p><img src={img} /></p>
				<div className='form-group'>
					<label>Login</label>
					<input type="email" name='login' placeholder='Login' value={loginInput} onChange={loginChangeHandler} />
				</div>
				<div className='form-group'>
					<label>Senha</label>
					<input type="password" name='senha' placeholder='Digite sua senha' value={senhaInput} onChange={senhaChangeHandler}/>
				</div>
			</div>
			<button className='entrar' type='submit'>Entrar</button>
		</form>
	);
}

export default FormularioLogin;