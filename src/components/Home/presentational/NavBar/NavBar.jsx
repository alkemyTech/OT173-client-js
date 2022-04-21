import StylesNavBar from "./NavBar.module.css"
const NavBar = () => {
  return (
    <nav className="nav">
      <div className={StylesNavBar.nav_container}>
        <div className={StylesNavBar.nav_container_logo}>
          <img src="/images/assets/logo.png" alt="" />
        </div>
        <ul className={StylesNavBar.nav_container_links}>
          <li className={StylesNavBar.nav_container_links_link}>Inicio</li>
          <li className={StylesNavBar.nav_container_links_link}>Nosotros</li>
          <li className={StylesNavBar.nav_container_links_link}>Actividades</li>
          <li className={StylesNavBar.nav_container_links_link}>Novedades</li>
          <li className={StylesNavBar.nav_container_links_link}>Testimonios</li>
          <li className={StylesNavBar.nav_container_links_link}>Contacto</li>
          <li className={StylesNavBar.nav_container_links_link}>Contribuye</li>
        </ul>
        <div className={StylesNavBar.nav_container_btns}>
          <button className={`${StylesNavBar.nav_container_btns} login-btn`}>Log In</button>
          <button className={`${StylesNavBar.nav_container_btns} sign-btn`}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
