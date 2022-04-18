import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <img className="navbar-img" src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png" alt="Logo" />
        <Link className="navbar-link" to="/">Inicio</Link>
        <Link className="navbar-link" to="/">Nosotros</Link>
        <Link className="navbar-link" to="/">Actividades</Link>
        <Link className="navbar-link" to="/">Novedades</Link>
        <Link className="navbar-link" to="/">Testimonios</Link>
        <Link className="navbar-link" to="/">Contacto</Link>
        <Link className="navbar-link" to="/">Contribuye</Link>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button loginbtn">Log in</button>
        <button className="navbar-button registerbtn">Registrate</button>
      </div>
    </nav>
  );
}

export default Header;
