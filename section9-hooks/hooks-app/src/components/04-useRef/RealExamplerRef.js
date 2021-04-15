import React, { useState } from "react";
import "../02-useEffect/useEffect.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks.js";

export const RealExamplerRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Real Example Ref</h1> 
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      <hr />

      {show && <MultipleCustomHooks />}

      
    </div> 
  );
};
