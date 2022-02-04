const btnOpenClose = document.getElementById(`open-close`)
const verificationBtn = btnOpenClose.value == "Estabelecimento Aberto"
const resultado = confirm(`Abrir o estabelecimento agora?`)

function openEst(){
        if(resultado == true){
            alert(`Estamos Abrindo.`)
            btnOpenClose.innerText=`Estabelecimento Aberto`, 
            btnOpenClose.style.backgroundColor = `#2bb81e`,
            btnOpenClose.style.border = `none`;
        }else {
            alert(`Ok! Vamos abrir mais tarde.`)
        }
    }

btnOpenClose.addEventListener(`click`, openEst())



function closeEst(){
    
}








/* function openEst(){
    if (confirm(`Abrir o estabelecimento agora?`)) {
        alert(`Estamos Abrindo.`)
        btnOpenClose.innerText=`Estabelecimento Aberto`, 
        btnOpenClose.style.backgroundColor = `#2bb81e`,
        btnOpenClose.style.border = `none`;
    } else {
        alert(`Ok! Vamos abrir mais tarde.`)
    }
}

 function closeEst(){
        btnOpenClose.removeEventListener(`click`,openEst)
 }

btnOpenClose.addEventListener(`click`, openEst) */