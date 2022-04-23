import React from "react";
import style from "./style.module.css";

import { cardBackoffice } from "./../../mocks/layoutMock";
import Header from "../Header/Header";

export const LayoutBackOffice = () => {
  return (
    <>
    <Header logo={'logo'} menu={[]}/>
    <div className={style.gridContainer}>
      {cardBackoffice.map((card) => (
        <div key={card.name} className={style.cardContainer}>
          <h2 className={style.cardTitle}>{card.name}</h2>
          <img src={card.icon} className={style.cardImg} alt={card.name} />
          <button type="button" className={style.cardButton}>IR</button>
        </div>
      ))}
    </div>
    </>
  );
};
