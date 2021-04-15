import React, { useMemo, useState } from "react";
import { heavyProcess } from "../../helpers/heavyProcess";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/useEffect.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);

 

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  //cuando se actualiza algún estado, se renderiza todo
  //otra vez, lo que podría hacer llamadas innecesarias
  return (
    <div>
      <h1>MemoHook</h1>
      <hr />

      <h3 className="mb-5">
        Counter:<small>{counter}</small>
      </h3>

      <p>{memoHeavyProcess}</p>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>

      <button
        className="btn btn-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
