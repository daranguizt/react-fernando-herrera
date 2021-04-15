import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  //the return is executed whenever the component is unmounted
  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    //problema: cada vez se monta, crea un nuevo listener
    //por ende, al desmontar sigue el anterior y se agregan más
    //lo que termina consumiendo memoria
    //y haciendo acciones innecesarias
    window.addEventListener("mousemove", mouseMove);

    //debo remover el listener al desmontar
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>This is the message</h3>
      <p>
          x: {x}, y: {y}
      </p>
    </div>
  );
};
