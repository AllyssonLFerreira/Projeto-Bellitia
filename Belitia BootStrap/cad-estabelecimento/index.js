const dados = document.getElementById("validationCustom");

function handleSubmit(event) {
    event.preventDefault();

    if (dados.value == "") {
        alert('Preencha todos os campos')    
    } else {
        alert('Estabelecimento cadastrado')
    }
}



