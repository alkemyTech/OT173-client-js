import { useEffect, useState } from 'react';

import { Loader } from '../loader/Loader';
import styles from './News.module.css';

const DUMMY_NEWS = [
  {
    name: 'Título de la primera noticia',
    image: 'https://picsum.photos/200/300',
    createdAt: '2022-04-25T00:10:01.257Z',
    id: '', // I leave it empty becouse if not the Link lead to a non-existent page
  },
  {
    name: 'Título de la segunda noticia pero un poco más largo',
    image: 'https://picsum.photos/250/300',
    createdAt: '2022-04-25T00:10:01.257Z',
    id: '',
  },
  {
    name: 'Título corto',
    image: 'https://picsum.photos/250/250',
    createdAt: '2022-04-25T00:10:01.257Z',
    id: '',
  },
  {
    name: 'Cuarta noticia para mostrar',
    image: 'https://picsum.photos/200/400',
    createdAt: '2022-04-25T00:10:01.257Z',
    id: '',
  },
  {
    name: 'Quinta noticia',
    image: 'https://picsum.photos/250/327',
    createdAt: '2022-04-25T00:10:01.257Z',
    id: '',
  },
  {
    name: 'Título de la sexta noticia',
    image: 'https://picsum.photos/100/290',
    createdAt: '2022-04-25T00:10:01.257Z',
    id: '',
  },
];

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setNews(DUMMY_NEWS);
      setIsLoading(false);
    };
    fetchNews();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <section className={styles.news_section}>
      <h1 className={styles.title}>Novedades</h1>
      {news.length ? (
        <p className={styles.info}>
          Estas son las últimas novedades que tenemos para mostrar
        </p>
      ) : (
        <p className={styles.info}>No tenemos novedades para mostrar</p>
      )}
      <div className={styles.news_list}>
        {news.map(news => (
          <div key={news.id}>{news.name}</div>
        ))}
      </div>
    </section>
  );
};

export default News;
