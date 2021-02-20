//Variables y Constantes

const nombre = "Fernando";
let apellido = "Herrera";

const nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

const nombre2 = "Diego";
let apellido2 = "Aránguiz";

const nombreCompleto2 = `${nombre2} ${apellido2}`;
console.log(nombreCompleto2);

function getSaludo(nombre){
    return `Hola, ${nombre}`;
}

console.log(`Este es un text: ${getSaludo(nombre)}`);