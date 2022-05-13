import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Footer.module.css";
import mailIcon from "../../data/icons/email.png";
import facebookIcon from "../../data/icons/facebook.png";
import instagramIcon from "../../data/icons/instagram.png";
import phoneIcon from "../../data/icons/phone-call.png";
import { Link } from "react-router-dom";


export default function Footer() {
  const [info, setInfo] = useState([])
  info.map(console.log)
  useEffect(() => {

    const fetchInfo = async () => {
      const result = await axios.get('/organizations/data')
      setInfo(result.data)
    }
    fetchInfo();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.footer_navigation}>
        <Link to='/' className={style.sample_logo}>
          <img className={style.logo_ong} src={'/images/assets/logo1.png'} alt="Logo ONG" />
        </Link>
        <Link to='/information' className={style.navLink}>
          Noticias
        </Link>
        <Link to='/activities' className={style.navLink}>
          Actividades
        </Link>
        <Link to='/news' className={style.navLink}>
          Novedades
        </Link>
        <Link to='/testimonial' className={style.navLink}>
          Testimonios
        </Link>
        <Link to='/us' className={style.navLink}>
          Nosotros
        </Link>
        <Link to='/contact' className={style.navLink}>
          Contacto
        </Link>
      </div>
      <div className={style.icons}>
        {info.map((item) => (
          <div>
            <Link
              to={`/${item?.email}`}
              rel="noopener noreferrer">
              <img
                src={mailIcon}
                className={style.icons_size}
                alt="Icono Mail"
              />
            </Link>
            <Link
              to={`/${item?.social_instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                className={style.icons_size}
                alt="Icono Instagram"
              />
            </Link>
            <Link
              to={`/${item?.social_facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                className={style.icons_size}
                alt="Icono Facebook"
              />
            </Link>
            <Link
              to={`/${item?.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={phoneIcon}
                className={style.icons_size}
                alt="Icono Telefono"
              />
            </Link>
          </div>
        ))}
      </div>
      <span className={style.info_alkemy}>
        2022 by Alkemy. All Rights Reserved.
      </span>
    </div >
  );
}
