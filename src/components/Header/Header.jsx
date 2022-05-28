import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { ROLES } from '../../constants/Roles';

function Header({ logo, menu, buttons }) {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const roleId = localStorage.getItem('roleId');
  const { pathname } = location;

  const handleLogOut = () => {
    dispatch(logout());
    window.location.reload();
  };

  const handleClick = () => setClick(!click);

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
            key={menuItem.name}
          >
            {menuItem.name}
          </Link>
        ))}
      </nav>
      {buttons === true ? (
        <>
          {user ? (
            <div className={styles.usermenu}>
              {user.image ? (
                <button onClick={handleClick} className={styles.usericonbutton}>
                  <img src={user.image} className={styles.usericon} />
                </button>
              ) : (
                <FaUserCircle
                  onClick={handleClick}
                  className={styles.usericon}
                />
              )}
              <ul
                className={
                  click
                    ? `${styles.userdropdownmenu}`
                    : `${styles.ddmenuclicked}`
                }
              >
                {roleId === ROLES.ADMIN ? (
                  <li>
                    <Link
                      className={styles.userdropdownlink}
                      to="/backoffice"
                      onClick={() => setClick(false)}
                    >
                      Admin Panel
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      className={styles.userdropdownlink}
                      to="/user"
                      onClick={() => setClick(false)}
                    >
                      Mi perfil
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    className={styles.userdropdownlink}
                    to="/"
                    onClick={() => setClick(false)}
                  >
                    <button
                      className={styles.dropdownbutton}
                      onClick={handleLogOut}
                    >
                      Cerrar Sesion
                    </button>
                  </Link>
                </li>
              </ul>
              <div className={styles.buttons}></div>
            </div>
          ) : (
            <div className={styles.buttons}>
              <Link to="/user/login">
                <button className={`${styles.button} ${styles.loginbtn}`}>
                  Log in
                </button>
              </Link>
              <Link to="/user/signup">
                <button className={`${styles.button} ${styles.registerbtn}`}>
                  Registrate
                </button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
      <FiMenu
        onClick={handleClick}
        className={click ? `${styles.iconclicked}` : `${styles.iconmenu}`}
      />
      <ul
        className={click ? `${styles.dropdownmenu}` : `${styles.ddmenuclicked}`}
      >
        {menu.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.dropdownlink}
                to={menuItem.link}
                onClick={() => setClick(false)}
              >
                {menuItem.name}
              </Link>
            </li>
          );
        })}
        {user ? (
          <>
            {roleId === ROLES.ADMIN ? (
              <li>
                <Link
                  className={styles.userdropdownlink}
                  to="/backoffice"
                  onClick={() => setClick(false)}
                >
                  Admin Panel
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className={styles.userdropdownlink}
                  to="/user"
                  onClick={() => setClick(false)}
                >
                  Mi perfil
                </Link>
              </li>
            )}
            <li>
              <Link
                className={styles.dropdownlink}
                to="/"
                onClick={() => setClick(false)}
              >
                <button
                  className={styles.dropdownbutton}
                  onClick={handleLogOut}
                >
                  Cerrar Sesion
                </button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className={styles.dropdownlink} to="/user/login">
                <button className={styles.dropdownbutton}>Inicia Sesión</button>
              </Link>
            </li>
            <li>
              <Link className={styles.dropdownlink} to="/user/signup">
                <button className={styles.dropdownbutton}>Registrate</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
