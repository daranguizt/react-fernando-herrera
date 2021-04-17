import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    history.push("/");
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
