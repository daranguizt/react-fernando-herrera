import heroes, { owners } from "../data/heroes";

// console.log(owners);
export const getHeroById = (id) => heroes.find((item) => item.id === id);

// console.log(getHeroById(4));

export const getHeroesbyOwner = (owner) =>
  heroes.filter((item) => item.owner === owner);

// console.log(getHeroesbyOwner("Marvel"));
