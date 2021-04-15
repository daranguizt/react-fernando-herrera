import React, { useState, useEffect } from "react";
import { Message } from "./Message";

import "./useEffect.css";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey");
  }, []);

  // react recomienda crear diversos useEffect dependiendo lo que se escucha
  // se ejecutan dependiendo del efecto

  useEffect(() => {
    //   console.log('formState is changed');
  }, [formState]);

  useEffect(() => {
    //   console.log('email changed');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>UseEffect Test</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {name === "123" && <Message />}
    </>
  );
};
