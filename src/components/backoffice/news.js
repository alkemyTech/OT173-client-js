import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './News.module.css';
import NewsRow from './NewsRow';
import { get } from '../../services/apiService';
import { error as serviceError } from '../../services/alertService';

function BackofficeNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, ok, error } = await get(`${process.env.REACT_APP_API_URI}/news`);
      if (ok) {
        setNews(data);
      } else {
        serviceError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header logo={'/images/assets/logo1.png'} menu={[]} buttons={false} />
      <div className={styles.container}>
        <div className={styles.tablecontent}>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Fecha de creación</th>
                <th className={styles.actions}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {news.map(news => (
                <NewsRow key={news.id} name={news.name} image={news.image} createdAt={news.createdAt} id={news.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BackofficeNews;
