import React, { useState } from 'react';
import './FormularioLogin.css';
import './Botao.css';
import img from './Imagens/login-user.png'


const FormularioLogin = () => {
	const [estabelecimentoInput, setEstabelecimentoInput] = useState('');
	const [loginInput, setLoginInput] = useState('');
	const [senhaInput, setSenhaInput] = useState('');
	// const [ userInput, setUserInput ] = useState({
	// 	estabelecimentoInput: '',
	// 	loginInput: '',
	// 	senhaInput: ''
	// });

	const estabelecimentoChangeHandler = (event) => {
		setEstabelecimentoInput(event.target.value);
		// setUserInput((prevState) => {
		// 	return{...prevState, estabelecimentoInput: event.target.value };
		// })
	};

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
		const dadosLogin = {
			estabelecimento: estabelecimentoInput,
			login: loginInput,
			senha: senhaInput
		};

		console.log(dadosLogin);
		setEstabelecimentoInput('');
		setLoginInput('');
		setSenhaInput('');
	}

	return(
		<form className='formulario' onSubmit={submitHandler}>
			<div className='loginEmpresa'>
				<p><img src={img} /></p>
				<div className='form-group'>
					<input type="text" placeholder='Estabelecimento' value={estabelecimentoInput} onChange={estabelecimentoChangeHandler}/>
				</div>
				<div className='form-group'>
					<label>Login</label>
					<input type="email" name='login' placeholder='Login' value={loginInput} onChange={loginChangeHandler} />
				</div>
				<div className='form-group'>
					<label>Senha</label>
					<input type="password" name='senha' placeholder='Digite sua senha' value={senhaInput} onChange={senhaChangeHandler}/>
				</div>
			</div>
			<button className='entrar'>Entrar</button>
		</form>
	);
}

export default FormularioLogin;