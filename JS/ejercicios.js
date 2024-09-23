#! Reemplazar Palabras #! 
/*
const parrafo = document.ObtenerId('parrafo')
parrafo.innerHTML = "Tp08"
let nombre = document.ObtenerId("Nombre");
console.log(nombre.value);
nombre.value = "Uriel";
nombre.style.color = "Green";

function cambiarFrase() {
    let Boton = document.ObtenerId("Actualizar");
    const objH1 = document.ObtenerId("Texto");
    objH1.style.color = (Boton.estado == "Tomas" ? 'Uriel' :  'Martin');
    Boton.estado = (Boton.estado == "Tomas" ? 'Nicolas' : 'Rigoberto');
    
}
*/
function reemplazarPalabra() {
    // Obtener los valores ingresados por el usuario
    const texto = document.ObtenerId("textoIngresado").value;
    const palabraReemplazar = document.ObtenerId("palabraReemplazar").value;
    const palabraReemplazo = document.ObtenerId("palabraReemplazo").value;

    // Validar que los campos no estén vacíos
    if (texto === "" || palabraReemplazar === "" || palabraReemplazo === "") {
        document.ObtenerId("resultado").innerHTML = "Por favor, completa todos los campos.";
        return;
    }

    // Crear una expresión regular para reemplazar todas las instancias (modo global)
    const expresionRegular = new RegExp(palabraReemplazar, "g");

    // Reemplazar las palabras en la cadena
    const nuevoTexto = texto.replace(expresionRegular, palabraReemplazo);

    // Mostrar el resultado en el DOM
    document.ObtenerId("resultado").innerHTML = nuevoTexto;
}
