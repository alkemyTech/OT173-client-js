import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlinks}>
        <img className={styles.logo} src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png" alt="Logo" />
        <Link className={styles.navlink} to="/">Inicio</Link>
        <Link className={styles.navlink} to="/">Nosotros</Link>
        <Link className={styles.navlink} to="/">Actividades</Link>
        <Link className={styles.navlink} to="/">Novedades</Link>
        <Link className={styles.navlink} to="/">Testimonios</Link>
        <Link className={styles.navlink} to="/">Contacto</Link>
        <Link className={styles.navlink} to="/">Contribuye</Link>
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.loginbtn}`}>Log in</button>
        <button className={`${styles.button} ${styles.registerbtn}`}>Registrate</button>
      </div>
    </nav>
  );
}

export default Header;
