import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { error as serviceError } from '../../services/alertService';
import { get } from '../../services/apiService';
import { Loader } from '../loader/Loader';
import NewStyles from './NewsDetail.module.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [selectedNew, setSelectedNew] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchNew = async () => {
      const { data, ok, error } = await get(`/news/${id}`);
      if (ok) {
        setSelectedNew(data);
      } else {
        serviceError({ text: `${error.message}` });
      }
      setIsFetching(false);
    };
    fetchNew();
  }, [id]);
  return (
    <>
      <div className={NewStyles.new_wrapper}>
        {selectedNew ? (
          <div className={NewStyles.new}>
            <h1 className={NewStyles.new_title}>{selectedNew.name}</h1>
            <div className={NewStyles.new_category}>{selectedNew.category}</div>
            <div className={NewStyles.new_image}>
              <img src={selectedNew.image} alt="" />
            </div>
            <p className={NewStyles.new_content}>{selectedNew.content}</p>
          </div>
        ) : (
          !isFetching && <Loader></Loader>
        )}
      </div>
    </>
  );
};

export default NewsDetail;
