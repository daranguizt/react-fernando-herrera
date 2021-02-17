//Promesas JS
//Son por naturaleza asíncronas

import { getHeroById, getHeroesbyOwner } from "./bases/08-import-export";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Tarea
//     const hero = getHeroById(2);
//     reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promise
//   .then((hero) => {
//     console.log(hero);
//   })
//   .catch((err) => console.warn(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("No se ha podido encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroByIdAsync(1)
  .then(console.log)
  .catch(console.warn);
