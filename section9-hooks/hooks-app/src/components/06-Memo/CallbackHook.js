import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/useEffect.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = (num) => {
    setCounter(counter + num);
  };

  useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter, counter]);

  return (
    <div>
      <h1>useCallbackHook</h1>
      <hr />

      <p>{counter}</p>

      <ShowIncrement increment={increment}/>
    </div>
  );
};
