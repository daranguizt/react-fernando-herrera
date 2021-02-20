//Funciones en JS

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2("Hee"));
console.log(saludar3("Hoo"));

//Tarea
//1. Transformar a arrow funct
//2. Retornar objeto implícito
//3. Pruebas
// function getUsuarioActivo (nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
