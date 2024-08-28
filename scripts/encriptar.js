function encriptador() {

    

    let texto = document.getElementById("Encriptado").value.
    toLowerCase()
    
    // Validación para permitir solo letras minúsculas y espacios
    if ( /[A-Z]/.test(texto) || /[^a-z\s]/.test(texto)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }

    let Encriptado = texto.replace(/e/img, "enter")
        Encriptado = Encriptado.replace(/o/img, "ober") 
        Encriptado = Encriptado.replace(/i/img, "ines")
        Encriptado = Encriptado.replace(/a/img, "ai")
        Encriptado = Encriptado.replace(/u/img, "ufat")            

    document.getElementById("desincriptado").value=Encriptado
    
     

}

// Función para desencriptar el texto
function desencriptador() {
    let texto = document.getElementById("desincriptado").value.toLowerCase();

    // Validación para permitir solo letras minúsculas y espacios
    if (/[A-Z]/.test(texto) || /[^a-z\s]/.test(texto)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }

    let desencriptado = texto.replace(/enter/img, "e");
    desencriptado = desencriptado.replace(/ober/img, "o");
    desencriptado = desencriptado.replace(/ines/img, "i");
    desencriptado = desencriptado.replace(/ai/img, "a");
    desencriptado = desencriptado.replace(/ufat/img, "u");

    document.getElementById("desincriptado").value = desencriptado;
}

function copiarTexto() {
    let contenido = document.getElementById("desincriptado");
    contenido.select();
    document.execCommand("copy");
    alert("se copio el texto")
}

// Configuración de los eventos de los botones
document.addEventListener("DOMContentLoaded", function() {
    let btnEncriptar = document.querySelector("#txtEncriptado");
    btnEncriptar.onclick = encriptador;

    let btnDesencriptar = document.querySelector("#txtDesencriptado");
    btnDesencriptar.onclick = desencriptador;

    let btnCopiar = document.querySelector("#txtCopiar");
    btnCopiar.onclick = copiarTexto;
});

// funcion del textarea
function actualizarEstadoTextarea() {
    const textarea = document.getElementById("desincriptado");
    const status = document.getElementById("textarea-status");
    if (textarea.value.trim() === "") {
        status.textContent = "El textarea está vacío.";
    } else {
        status.textContent = `Contenido: ${textarea.value}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let btnEncriptar = document.querySelector("#txtEncriptado");
    btnEncriptar.onclick = function() {
        encriptador();
        actualizarEstadoTextarea();
    };

    let btnDesencriptar = document.querySelector("#txtDesencriptado");
    btnDesencriptar.onclick = function() {
        desencriptador();
        actualizarEstadoTextarea();
    };

    let btnCopiar = document.querySelector("#txtCopiar");
    btnCopiar.onclick = function() {
        copiarTexto();
        actualizarEstadoTextarea();
    };
});
