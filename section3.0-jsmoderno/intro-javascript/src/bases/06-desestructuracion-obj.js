
//Desestructuración en JS

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

const {nombre, edad, clave} = persona;
//const {nombre: nombre2} renombrar

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const newUserContext = ({clave, nombre, edad, rango = 'Capitán'}) => {
    // console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12312,
            lng: -12.234234
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = newUserContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
