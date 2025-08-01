// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value.trim();
    if (validarAmigo(amigo)) {
        amigos.push(amigo);
        limpiarEntradaTexto();
        mostrarAmigos();
    }
}

// Función para sortear amigo
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.")
        return;
    }
    if (amigos.length === 1) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }
    let numeroMaximo = amigos.length;
    let indiceAleatorio = Math.floor(Math.random() * numeroMaximo);
    let amigoSecreto = amigos[indiceAleatorio];
    asignarTextoElemento('ul', `<strong style="color: green;">El amigo sorteado secreto es: ${amigoSecreto}</strong>`);
}

//Función para reiniciar
function reiniciar() {
    amigos = [];
    mostrarAmigos();
    limpiarEntradaTexto();
    asignarTextoElemento('ul', '<p>No hay amigos agregados.</p>');
}

// Función para mostrar amigos
function mostrarAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    if (amigos.length === 0) {
        listaHTML.innerHTML = '<p>No hay amigos agregados.</p>';
        return;
    }
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        listaHTML.appendChild(nuevoElemento);
    }
}

// Función para crear elemento y asignar texto
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Funnción para limpiar el input de la entrada
function limpiarEntradaTexto() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

// Función para validar
function validarAmigo(amigo) {
    if (amigo === '') {
        alert("Por favor, inserte un nombre.");
        return false;
    }
    if (amigos.includes(amigo)) {
        alert("Este amigo ya ha sido agregado.");
        return false;
    }
    return true;
}
