/* const hoteis = require("./hoteis.json")

//npm install 

//chama o express
const express = require("express") 

//instancia o server
const app = express()

//realiza ações ao requisitar ou responder
//O string de cada entrada para get é um endpoint
//o método .get recebe um parâmetro string e uma função callback. a string é o diretório passado pelo site.
app.get('/',(request,response)=>{
    response.send("Página para procurar hoteis") 
})

//No método abaixo recebe também um parâmetro (:name)
app.get('/rating/:val',(req,res)=>{
    const rating = req.params.val
    let string = `Filtrando hotéis com ${rating} estrelas ou mais`
    const resultado = hoteis.filter((hotel)=>hotel.rating>=rating)

    resultado.forEach((hotel)=>{

        string+=`<br><h1>Nome do hotel:${hotel.name}</h1><br>Quantidade de estrelas:${hotel.rating}<br>
        Preço:${hotel.price}<br> Cidade: ${hotel.city}<br>`
        
    
    })
    res.send(string)
}
)

app.get('/price/:val',(req,res)=>{
    const price = req.params.val
    let string = `Filtrando hotéis que custam ${price} ou mais`
    const resultado = hoteis.filter((hotel)=>hotel.price>=price)

    resultado.forEach((hotel)=>{

        string+=`<br><h1>Nome do hotel:${hotel.name}</h1><br>Quantidade de estrelas:${hotel.rating}<br>
        Preço:${hotel.price}<br> Cidade: ${hotel.city}<br>`
        
    
    })
    res.send(string)
}
)

//No método abaixo recebe também um parâmetro (:name)
app.get('/name/:val',(req,res)=>{
    const name = req.params.val
    let string = `Filtrando hotéis que possuam no nome a palavra ${name}`
    const resultado = hoteis.filter((hotel)=>hotel.name.includes(name))

    resultado.forEach((hotel)=>{

        string+=`<br><h1>Nome do hotel:${hotel.name}</h1><br>Quantidade de estrelas:${hotel.rating}<br>
        Preço:${hotel.price}<br> Cidade: ${hotel.city}<br>`
        
    
    })
    res.send(string)
}
)

app.get('/city/:val',(req,res)=>{
    const city = req.params.val
    let string = `Filtrando hotéis da cidade de ${city}`
    const resultado = hoteis.filter((hotel)=>hotel.city.includes(city))

    resultado.forEach((hotel)=>{

        string+=`<br><h1>Nome do hotel:${hotel.name}</h1><br>Quantidade de estrelas:${hotel.rating}<br>
        Preço:${hotel.price}<br> Cidade: ${hotel.city}<br>`
        
    
    })
    res.send(string)
}
)

//Define porta e funções ao executar o servidor
app.listen(3000,()=>{ console.log("Servidor Online")})

 */

