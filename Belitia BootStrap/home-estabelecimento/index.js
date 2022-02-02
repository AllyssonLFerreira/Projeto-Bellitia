const buttonOpenClose = document.getElementById('open-close')
let verificationBtn = buttonOpenClose.value == "Abrir Estabelecimento"

buttonOpenClose.addEventListener('click', ()=>{
    if(verificationBtn = true){
        buttonOpenClose.innerText=`Estabelecimento Aberto` 
        buttonOpenClose.style.backgroundColor = `#2bb81e`
        buttonOpenClose.style.border = `none`
    } 
})

buttonOpenClose.addEventListener(`blclick`)