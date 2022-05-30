import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Footer.module.css';
import mailIcon from '../../data/icons/email.png';
import facebookIcon from '../../data/icons/facebook.png';
import instagramIcon from '../../data/icons/instagram.png';
import phoneIcon from '../../data/icons/phone-call.png';
import linkedinIcon from '../../data/icons/linkedin.png';
import { Link } from 'react-router-dom'

export default function Footer() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const result = await axios.get('/organizations/public');
      setInfo(result.data);
    };
    fetchInfo();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.footer_navigation}>
        <div className={style.sample_logo}>
          <img
            className={style.logo_ong}
            src={'/images/assets/logo1.png'}
            alt="Logo ONG"
          />
        </div>
        <div className={style.information}>
          <Link to="/">Inicio</Link>
        </div>
        <div className={style.activities}>
          <Link to="/activities">Actividades</Link>
        </div>
        <div className={style.news}>
          <Link to="/news">Novedades</Link>
        </div>
        <div className={style.testimonial}>
          <Link to="/testimonial">Testimonios</Link>
        </div>
        <div className={style.us}>
          <Link to="/us">Nosotros</Link>
        </div>
        <div className={style.contact}>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>
      <div className={style.icons}>
        {info
          .filter(val => val.id === 8)
          .map((item, index) => (
            <div key={index}>
              <a href={item.address} target="_blank" rel="noopener noreferrer">
                <img
                  src={mailIcon}
                  className={style.icons_size}
                  alt="Icono Mail"
                />
              </a>
              <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  className={style.icons_size}
                  alt="Icono Instagram"
                />
              </a>
              <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                <img
                  src={facebookIcon}
                  className={style.icons_size}
                  alt="Icono Facebook"
                />
              </a>
              <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedinIcon}
                  className={style.icons_size}
                  alt="Icono linkedin"
                />
              </a>
              <a href={item.phone} target="_blank" rel="noopener noreferrer">
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