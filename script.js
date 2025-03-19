// Inicializar array de amigos
let amigos = [];

// Función para adicionar amigo
function adicionarAmigo() {
    let nombre = document.getElementById('nombre').value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    document.getElementById('nombre').value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// Función para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎁`;
}
