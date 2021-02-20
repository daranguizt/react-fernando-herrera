
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [,, p3] = personajes;

// console.log(p3);

const getArray = () => {
    return ['ABC', 123]
}

const [letras, numeros] = getArray();
// console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr es nombre
// 2. el segundo setNombre
const newUseState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = newUseState('Goku');
console.log(nombre);
setNombre();