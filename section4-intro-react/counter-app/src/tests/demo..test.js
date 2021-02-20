import { getSaludo } from "../base-pruebas/02-template-string";

test( 'first-test', () => {

    //1. Init
    const msg = 'Hola Mundo';

    //2. Stimulus
    const msg2 = `Hola Mundo`;

    //3.  Observe
    expect( msg ).toBe(msg2); //===

    
});