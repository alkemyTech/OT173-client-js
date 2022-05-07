import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Footer.module.css";
import mailIcon from "../../data/icons/email.png";
import facebookIcon from "../../data/icons/facebook.png";
import instagramIcon from "../../data/icons/instagram.png";
import phoneIcon from "../../data/icons/phone-call.png";


export default function Footer() {
  const [info, setInfo] = useState([])

  useEffect(()=>{
  
    const fetchInfo = async () => {
      const result = await axios.get('/organizations/data')
      setInfo(result.data)
  }
  fetchInfo();
}, []);

  return (
    <div className={style.container}>
       <div className={style.sample_logo}>
        {info.map((item) => (
          <img className={style.logo_ong} src={item.image} alt="Logo ONG" />
        ))}
      </div>
      <hr className={style.rectangle_top} />
      <div className={style.footer_navigation}>
        <p className={style.information}>
          <a href="/information">Noticias</a>
        </p>
        <p className={style.activities}>
          <a href="/activities">Actividades</a>
        </p>
        <p className={style.news}>
          <a href="/news">Novedades</a>
        </p>
        <p className={style.testimonial}>
          <a href="/testimonial">Testimonios</a>
        </p>
        <p className={style.us}>
          <a href="/us">Nosotros</a>
        </p>
        <p className={style.contact}>
          <a href="/contact">Contacto</a>
        </p>
      </div>
      <hr className={style.rectangle_bottom} />
      <div className={style.icons}>
        {info.map((item) => (
          <div>
            <a href={item.email} target="_blank" rel="noopener noreferrer">
              <img
                src={mailIcon}
                className={style.icons_size}
                alt="Icono Mail"
              />
            </a>
            <a
              href={item.social_instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                className={style.icons_size}
                alt="Icono Instagram"
              />
            </a>
            <a
              href={item.social_facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                className={style.icons_size}
                alt="Icono Facebook"
              />
            </a>
            <a
              href={item.phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={phoneIcon}
                className={style.icons_size}
                alt="Icono Telefono"
              />
            </a>
          </div>
        ))}
      </div>
      <span className={style.info_alkemy}>
        2022 by Alkemy. All Rights Reserved.
      </span>
    </div>
  );
}
