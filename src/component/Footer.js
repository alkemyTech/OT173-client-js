import React from "react";
import style from "./Footer.module.css";
import { LOGO_INFO, LINKS_SOCIAL } from "../data/data";

export default function Footer() {
  return (
    <div className={style.container}>
       <div className={style.sample_logo}>
        {LOGO_INFO.map((item) => (
          <img className={style.logo_ong} src={item.Image} alt={item.Text} />
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
        {LINKS_SOCIAL.map((items) => (
          <div>
            <a href={items.mail_info} target="_blank" rel="noopener noreferrer">
              <img
                src={items.mail_icon}
                className={style.icons_size}
                alt={items.alt_text}
              />
            </a>
            <a
              href={items.instagram_info}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={items.instagram_icon}
                className={style.icons_size}
                alt={items.alt_text}
              />
            </a>
            <a
              href={items.facebook_info}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={items.facebook_icon}
                className={style.icons_size}
                alt={items.alt_text}
              />
            </a>
            <a
              href={items.phone_info}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={items.phone_icon}
                className={style.icons_size}
                alt={items.alt_text}
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
