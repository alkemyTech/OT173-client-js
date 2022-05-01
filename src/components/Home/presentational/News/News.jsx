import { useState, useEffect } from 'react';
import NewsStyles from './News.module.css';
import { get } from '../../../../services/apiService';
import { Link } from 'react-router-dom';
import { error } from '../../../../services/alertService';
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const newsRequest = async () => {
      const newsResponse = await get('/news');
      if (newsResponse.ok) {
        setNews(newsResponse.data || []);
      } else {
        error({ text: newsResponse.error.message });
      }
    };
    newsRequest();
  }, []);
  return (
    <div className={NewsStyles.container}>
      <h2 className={NewsStyles.news_title}>Lastest News</h2>
      <div className={NewsStyles.news}>
        {news.map(newSlide => {
          return (
            <Link
              to={`/news/${newSlide.id}`}
              className={NewsStyles.news_new}
              key={newSlide.id}
            >
              <div className={NewsStyles.news_new_image}>
                <img src={newSlide.image} alt={newSlide.title} />
              </div>
              <p className={NewsStyles.news_new_info}>{newSlide.name}</p>
            </Link>
          );
        })}
      </div>
      <div className={NewsStyles.news_btn}>
        <button className={NewsStyles.news_btn_see}>See More</button>
      </div>
    </div>
  );
};

export default News;
