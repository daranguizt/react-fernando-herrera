import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("08-imp-exp", () => {
  test("should return hero", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });
  test("should return undefined if no hero is present", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("should return dc heroes", () => {
    const search = "DC";
    const heroesData = heroes.filter((item) => item.owner === search);
    expect(heroesData).toEqual(getHeroesByOwner(search));
  });

  test("should return marvel heroes", () => {
    const search = "Marvel";
    const heroesData = heroes.filter((item) => item.owner === search);
    expect(heroesData?.length).toBe(getHeroesByOwner(search)?.length);
  });
});
