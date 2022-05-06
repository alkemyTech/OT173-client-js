import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useLocation } from 'react-router';

function Header({ logo, menu, buttons }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className={styles.navbar}>
      <nav className={styles.navlinks}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        {menu.map(menuItem => (
          <Link
            className={`
              ${pathname === menuItem.link ? styles.active : {}} ${
              styles.navlink
            }
            `}
            to={menuItem.link}
          >
            {menuItem.name}
          </Link>
        ))}
      </nav>
      {buttons === true ? (
        <div className={styles.buttons}>
          <Link to="/login">
            <button className={`${styles.button} ${styles.loginbtn}`}>
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className={`${styles.button} ${styles.registerbtn}`}>
              Registrate
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;
