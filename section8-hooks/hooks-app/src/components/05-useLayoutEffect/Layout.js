import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter();
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data } = useFetch(url);

  //const {author, quote} = !!data && data[0]; //trucazo!

  //mi manera de desestructurar
  const quote = data && data[0]?.quote;

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState([]);

  //uso en este caso para medir cosas luego de cambios
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>Layout Effect - BreakingBad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>{quote}</p>
      </blockquote>

      <pre>
          {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next quote
      </button>
    </div>
  );
};
