
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123123123,
        lat: 14.1231,
        lng: 32.92392
    }
};

//desde ES5, obviar el nombre es lo mismo que hacer persona: persona
console.log({persona});

//se copia el puntero 
// const persona2 = persona;
// console.log(persona2);

//esto es una copia, con spread operator
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);