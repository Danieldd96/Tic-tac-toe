let valor = document.querySelectorAll('.valor')
let jugador = "X"
let cpu = "O"
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
            const Alea = Math.floor(Math.random() * nuevoVector.length);
            valor[nuevoVector[Alea]].innerHTML = cpu;
        }
    }
    if (winner(valor)) {
        alert("Ganaste");
        // Remover los event listeners
        valor.forEach(item => item.removeEventListener('click', handleClick));
    }
}
for (let i = 0; i < valor.length; i++) {
    valor[i].addEventListener('click', handleClick);
}

function winner(valor) {
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
  