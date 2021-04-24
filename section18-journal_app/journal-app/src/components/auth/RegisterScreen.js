import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Diego",
    email: "diego@hehe.net",
    password: "123456",
    confirmPassword: "123456",
  });

  const { name, email, password, confirmPassword } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      const msg = "name is required";
      dispatch(setError(msg));
      return false;
    }
    if (!validator.isEmail(email)) {
      console.log(validator.isEmail(email));
      const msg = "email is not valid";
      dispatch(setError(msg));
      return false;
    }
    if (password !== confirmPassword || password.length < 5) {
      const msg = "Passwords should match and be longer than 6 characters ";
      dispatch(setError(msg));
      return false;
    }

    if (msgError) {
      dispatch(removeError());
    }
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}  className="animate__animated animate__fadeIn animate__faster">
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={confirmPassword}
        />

        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
          disabled={false}
        >
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
