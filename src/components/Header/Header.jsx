import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ logo, menu }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlinks}>
        <img className={styles.logo} src={logo} alt="Logo" />
        {menu.map((menuItem) => (
          <Link className={styles.navlink} to={menuItem.link}>
            {menuItem.name}
          </Link>
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.loginbtn}`}>
          Log in
        </button>
        <button className={`${styles.button} ${styles.registerbtn}`}>
          Registrate
        </button>
      </div>
    </nav>
  );
}

export default Header;
