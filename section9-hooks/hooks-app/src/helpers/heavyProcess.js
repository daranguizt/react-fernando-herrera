export const heavyProcess = (iterate) => {
    for (let i = 0; i < iterate; i++) {
      console.log("let's a go");
    }

    return `${iterate} iterations made`;
  };