import React, { useRef } from "react";
import "../02-useEffect/useEffect.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        placeholder="Your name"
      ></input>

      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
