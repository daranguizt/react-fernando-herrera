import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"
import '@testing-library/jest-dom';

describe('Pruebas en 05 funciones', () => {
    test('getUser debe retornar objecto', () => {
        const userTest = {
            uid: "ABC123",
            username: 'El_Papi1502'
        }

        //objectos fallan en ===, porque ve el puntero
        const user = getUser();
        expect(user).toEqual(userTest);
        
    });

    //getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = "El Pepe";

        const expected = {
            uid: 'ABC567',
            username: name
        };

        const received = getUsuarioActivo(name);

        expect(received).toEqual(expected);
    })

    test('getUsuarioActivo es de tipo object', () => {
        const name = "El Pepe";

        const expected = {
            uid: 'ABC567',
            username: name
        };

        const received = getUsuarioActivo(name);
        expect(typeof received).toBe(typeof expected);
    })

})