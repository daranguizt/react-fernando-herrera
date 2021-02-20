import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("promise testing", () => {
  test("return hero async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("should get error if not exist", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toContain("encontrar");
      done();
    });
  });
});
