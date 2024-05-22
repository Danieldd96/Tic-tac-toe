let valor = document.querySelectorAll('.valor')////Con este querySelectorAll obtengo todas las casillas
let jugador = "X"
let cpu = "O"
let statusDisplay = document.querySelector('.turno')///Con este obtengo el div en el cual caera los turnos
console.log(valor)
function handleClick(event) {
    let i = Array.from(valor).indexOf(event.target);
    if (valor[i].textContent === '') {
        valor[i].innerHTML = jugador;
        console.log(valor[i].textContent);
        const nuevoVector = [];
        
        for (let j = 0; j < valor.length; j++) {
            if (valor[j].textContent === '') {
                nuevoVector.push(j);
            }
            console.log(nuevoVector);
        }
        if (nuevoVector.length > 0) {
            setTimeout(() => {
                const Alea = Math.floor(Math.random() * nuevoVector.length);
                valor[nuevoVector[Alea]].innerHTML = cpu;
            }, 1000);
        }if (checkEmpate(valor)) {
            return false
            
        }
    }
    function checkEmpate(valor) {
        const full = Array.from(valor).every(valor => valor.textContent);
        if (full) {
            alert('!Empate')
            return true;
        } else {
            return false
            
        }
        
    }
    
    if (winner(valor)) {
        alert("Ganaste");
        // Remover los event listeners
        valor.forEach(item => item.removeEventListener('click', handleClick));
    }
    let mensaje = valor[i].innerHTML;
    console.log(mensaje)
    function display(mensaje) {
        statusDisplay.innerHTML= mensaje
        return statusDisplay
    }
    display("Turno"+ mensaje)
    
}

for (let i = 0; i < valor.length; i++) {
    valor[i].addEventListener('click', handleClick);
}

function winner(valor) {/////Esta funcion me ayudara a encontrar el ganador con las combinaciones dadas
    const winCelds = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const combo of winCelds) {
        const [a, b, c] = combo;
        if (valor[a].textContent && valor[a].textContent === valor[b].textContent && valor[a].textContent === valor[c].textContent) {
            let gana = valor[c].textContent;
            alert(gana);
            
            return true;
        }
    }
    return false;
}
function PlayAudio() {
    document.getElementById("music").play();

}