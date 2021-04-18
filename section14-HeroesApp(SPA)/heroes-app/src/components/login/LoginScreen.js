import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    // history.push("/");
    const lastPath = localStorage.getItem('lastPath') || '/';

    const action = {
      type: types.login,
      payload: {
        name: "Diego",
        logged: true,
      },
    };

    dispatch(action);

    //esta tarea es asíncrona, y puede colocarse antes
    //dado que el dispatch es síncrono
    //react-router-dom primero completa todo lo síncrono
    history.replace(lastPath);
  };

  return (
    <div className="container p-5">
      <h1>Login Screen</h1>
      <hr />

      <form className="form-group">
        <input className="form-control mb-3" type="text" name="username" />
        <input className="form-control mb-3" type="text" name="password" />
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
