import { getSaludo } from "../../base-pruebas/02-template-string";
import "@testing-library/jest-dom";

describe("Pruebas en template string", () => {
  test("getSaludo must return hola + nombre", () => {
    const nombre = "Diego";

    const result = getSaludo(nombre);
    //console.log(result);
    expect(result).toBe("Hola " + nombre);
  });

  //getSaludo debe retornar Hola Carlos si no hay args

  test("getSaludo debe retornar Hola Carlos si no hay args", () => {
    const expected = "Hola heehee";
    expect(getSaludo()).toBe(expected);
  });
});
