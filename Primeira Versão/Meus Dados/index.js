const botao = document.getElementById("confirmar")

const dados = document.getElementById("validationCustom01");
const form = document.getElementById("form");

function handleSubmit(event) {
	console.log(dados.value)
	event.preventDefault();

	if (dados.value == "") {

		alert('Peencha todos os campos')
	} else {
		alert("Dados atualizados")
	}


}
	

