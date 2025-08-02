// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    } else {
        alert(`Amigo ${nombre} agregado correctamente.`);
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
    }
    alert(`Lista de amigos: ${amigos.join(", ")}`);
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    } else if (amigos.length === 1) {
        alert(`El único amigo es: ${amigos[0]}`);
        return;
    } else {
        alert(amigos[Math.floor(Math.random() * amigos.length)]);
    }
}