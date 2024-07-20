"use strict";
// elementos
const contenidoContenido = document.querySelector(".hero");
const contenidoEnviado = document.querySelector(".contenido-enviado");
const formularioEnviar = document.querySelector(".formulario-enviar");
const emailEl = document.getElementById("email");
const enviarFormulario = document.querySelector("#enviar-formulario");
const borrarEnviado = document.querySelector("#borrar-enviado");
const mostrarEmail = document.querySelector(".mostrar-email");


// eventos

enviarFormulario.addEventListener("click", enviarEmail);
borrarEnviado.addEventListener("click", toggleCards);

// funciones 
function toggleCards() {
    contenidoContenido.classList.toggle("esconder");
    contenidoEnviado.classList.toggle("esconder");
}

function validarEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function enviarEmail(e) {
    e.preventDefault();

    // validar email
    if (validarEmail(emailEl.value)) {
        mostrarEmail.innerText = emailEl.value;
        toggleCards();
        emailEl.value = "";
        formularioEnviar.classList.remove("error");
    } else {
        // invalidar email
        formularioEnviar.classList.add("error");
    }
}

