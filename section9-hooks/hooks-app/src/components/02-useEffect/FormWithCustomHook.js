import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./useEffect.css";

export const FormWithCustomHook = () => {
  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  useEffect(() => {
    console.log("email is changed");
  }, [email]);

  return (
    <>
      <h1>FormWithCustomHook Test</h1>
      <hr />

      <form className="form-group" onSubmit={handleSubmit}>
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
          type="password"
          name="password"
          className="form-control"
          placeholder="Your password"
          autoComplete="off"
          value={password}
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

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </>
  );
};
