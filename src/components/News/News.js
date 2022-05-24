import { useEffect, useState } from 'react';

import { Loader } from '../loader/Loader';
import NewsCard from './NewsCard';
import styles from './News.module.css';
import { get } from '../../services/apiService';

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);


  useEffect(() => {
    const fetchNews = async () => {

      const { data } = await get('/news')
      setNews(data);
      setIsLoading(false);

    };
    fetchNews();
  }, []);

  if (isLoading) return <Loader width={200} height={200} />;
  return (
    <>
      <section className={styles.news_section}>
        <h1 className={styles.title}>Novedades</h1>
        {news.length ? (
          <>
            <p className={styles.info}>
              Estas son las últimas novedades que tenemos para mostrar
            </p>
            <div className={styles.news_list}>
              {news.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </>
        ) : (
          <p className={styles.info}>No tenemos novedades para mostrar</p>
        )}
      </section>
    </>
  );
};

export default News;
