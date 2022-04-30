import React from "react";
import style from "./style.module.css";
import Header from './../components/Header/Header';
import { Link } from "react-router-dom";
import { cardBackoffice } from "../constants/CardLayoutInfo";

export const LayoutBackOffice = () => {
  return (
    <>
    <Header logo={'https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png'} menu={[]}/>
    <div className={style.gridContainer}>
      {cardBackoffice.map((card) => (
        <div key={card.name} className={style.cardContainer}>
          <h2 className={style.cardTitle}>{card.name}</h2>
          <img src={card.icon} className={style.cardImg} alt={card.name} />
          <Link to={card.link} className={style.cardButtonLink}>
            Ir
          </Link>          
        </div>
      ))}
    </div>
    </>
  );
};
