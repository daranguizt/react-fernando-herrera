const { retornaArreglo } = require("../../base-pruebas/07-deses-arr")

describe('pruebas en desestructuración', () => {
    test('return string and num', () => {
        const [letras, numeros] = retornaArreglo(); 

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    })
})