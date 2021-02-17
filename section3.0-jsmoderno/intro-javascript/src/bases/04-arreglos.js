
//Arreglos en JS

const arreglo = [1,2,3,4];

//los arreglos también usan punteros, let ar1 = ar2 es un puntero

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map((item) => {
    return item;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);