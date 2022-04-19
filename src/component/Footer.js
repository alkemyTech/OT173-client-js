import React from "react";
import style from "./Footer.module.css";
import { LOGO_INFO, LINKS_SOCIAL } from "../data/data";

export default function Footer() {
  return (
    <div className={style.container}>
      <hr className={style.Rectangle_top} />
      <div className={style.footer_navigation}>
        <p className={style.Noticias}>
          <a href="/Noticias">Noticias</a>
        </p>
        <p className={style.Actividades}>
          <a href="/Actividades">Actividades</a>
        </p>
        <p className={style.Novedades}>
          <a href="/Novedades">Novedades</a>
        </p>
        <p className={style.Testimonios}>
          <a href="/Testimonios">Testimonios</a>
        </p>
        <p className={style.Nosotros}>
          <a href="/Nosotros">Nosotros</a>
        </p>
        <p className={style.Contacto}>
          <a href="/Contacto">Contacto</a>
        </p>
      </div>
      <div className={style.Sample_Logo}>
        {LOGO_INFO.map((item) => (
          <img className={style.Logo_ONG} src={item.Image} alt={item.Text} />
        ))}
      </div>
      <hr className={style.Rectangle_Bottom} />
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
      <span className={style.Info_Alkemy}>
        2022 by Alkemy. All Rights Reserved.
      </span>
    </div>
  );
}
