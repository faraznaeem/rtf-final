import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/output-onlinepngtools.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a>
                <NavLink className="nav-link" to="/" className="nav-link">
                  Huvudsida
                </NavLink>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <NavLink to="/about" className="nav-link">
                  Om oss
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <NavLink to="/about" className="nav-link">
                  Tjänster
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <NavLink to="/contact" className="nav-link">
                  Kontakt
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
