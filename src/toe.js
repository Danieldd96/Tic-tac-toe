
let valor = document.querySelectorAll('.valor')
let jugador = true
let cpu = false


for (let i = 0; i < valor.length; i++) {
    valor[i].addEventListener('click', ()=> {
       
            
        let numero = Math.floor(Math.random()*(8+1));
            
        valor[i].innerHTML= "X",
        valor[numero].innerHTML = 'O'

        
        
    })
}




