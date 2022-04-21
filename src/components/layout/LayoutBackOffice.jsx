import React from "react";
import style from "./style.module.css";

import { cardBackoffice } from "./../../mocks/layoutMock";

export const LayoutBackOffice = () => {
  return (
    <div className={style.gridContainer}>
      {cardBackoffice.map((card) => (
        <div key={card.name} className={style.cardContainer}>
          <h2 className={style.cardTitle}>{card.name}</h2>
          <img src={card.icon} className={style.cardImg} alt={card.name} />
          <button type="button" className={style.cardButton}>IR</button>
        </div>
      ))}
    </div>
  );
};
