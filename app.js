// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    } else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";  
    }
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo(){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";


    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    } else if (amigos.length === 1) {
        const li = document.createElement("li");
        li.textContent = `El único amigo es: ${amigos[0]}`;
        resultado.appendChild(li);
        return;
    } else {
        const ganador = amigos[Math.floor(Math.random() * amigos.length)];
        const li = document.createElement("li");
        li.textContent = `El amigo secreto es: ${ganador}`;
        resultado.appendChild(li);
    }
}