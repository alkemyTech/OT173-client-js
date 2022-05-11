import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice';

function Header({ logo, menu, buttons }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { pathname } = location;

  const [menuToggle, setMenuToggle] = useState(false)

  const handleLogOut = () => {
    dispatch(logout());
  }

  return (
    <header className={styles.navbar}>
      <nav className={styles.navlinks}>
        <div className={styles.containerHeaderResponsive}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Logo" />
          </Link>
          <div className={styles.containerButtonMenu}>
            <button className={`${styles.button} ${styles.menuBtn}`} onClick={() => setMenuToggle(!menuToggle)}>
              Menu
            </button>
          </div>
        </div>
        {menu.map(menuItem => (
          <Link
            className={`
              ${pathname === menuItem.link ? styles.active : {}} ${!menuToggle ? styles.navlinkNone : styles.navlink}
            `}
            to={menuItem.link}
          >
            {menuItem.name}
          </Link>
        ))}
      </nav>
      {buttons === true && !user ? (
        <div className={!menuToggle ? styles.buttonsNone : styles.buttons}>
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
        <div className={styles.buttons}>
          <Link to="/">
            <button className={`${styles.button} ${styles.registerbtn}`} onClick={handleLogOut}>
              Cerrar Sesion
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
