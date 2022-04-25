import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NewsCard.module.css';

const NewsCard = ({ news }) => {
  const { name, image, createdAt, id } = news;

  return (
    <Link to={`/news/${id}`} className={styles.news_card}>
      <img className={styles.news_card_thumbnail} src={image} alt={name} />
      <h2 className={styles.news_card_title}>{name}</h2>
      <p className={styles.news_card_date}>📆 {createdAt}</p>
    </Link>
  );
};

export default NewsCard;
