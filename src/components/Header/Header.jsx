import React from 'react';
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

  const handleLogOut = () => {
    dispatch(logout());
  }

  return (
    <header className={styles.navbar}>
      <input type={'checkbox'} className={styles.expandToggle} id={'expand-toggle'}></input>
      <nav className={styles.navlinks}>
        <div className={styles.containerHeaderResponsive}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Logo" />
          </Link>
          <div className={styles.containerButtonMenu}>
            <label
              htmlFor="expand-toggle"
              id="expand-btn"
              className={`${styles.button} ${styles.menuBtn} ${styles.expandBtn}`}
            >
              Menu
            </label>
          </div>
        </div>
        {menu.map(menuItem => (
          <Link
            className={`
              ${pathname === menuItem.link ? styles.active : {}} ${styles.navlink} ${styles.expandable}
            `}
            to={menuItem.link}
            key={menuItem.name}
          >
            {menuItem.name}
          </Link>
        ))}
      </nav>
      {buttons === true && !user ? (
        <div className={styles.buttonsContent}>
          <div className={`${styles.buttons} ${styles.expandable}`}>
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
        </div>
      ) : (
        <div className={styles.buttonsContent}>
          <div className={`${styles.buttons} ${styles.expandable}`}>
            <Link to="/">
              <button className={`${styles.button} ${styles.registerbtn}`} onClick={handleLogOut}>
                Cerrar Sesion
              </button>
            </Link>
          </div>
        </div>
      )
      }
    </header >
  );
}

export default Header;