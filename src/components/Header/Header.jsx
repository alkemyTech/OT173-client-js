import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import {FiMenu} from "react-icons/fi"

function Header({ logo, menu, buttons }) {
  
  const [click, setClick] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { pathname } = location;
  

  const handleLogOut = ()=>{
    dispatch(logout());
  }
  
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
      {buttons === true && !user ? (
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
        <div className={styles.buttons}>
          <Link to="/">
            <button className={`${styles.button} ${styles.registerbtn}`} onClick={handleLogOut}>
              Cerrar Sesion
            </button>
          </Link>
        </div>
      )}
      <FiMenu onClick={handleClick} className={click ? `${styles.iconclicked}` : `${styles.iconmenu}`}/>
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
      </ul>
    </header>
  );
}

export default Header;