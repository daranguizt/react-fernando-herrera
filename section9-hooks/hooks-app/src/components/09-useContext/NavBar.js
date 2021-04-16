import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">
            About
          </NavLink>
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
