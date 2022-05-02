import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { get } from '../../services/apiService';
import { Loader } from '../loader/Loader';
import styles from './Activity.module.css';

const Activity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activity, setActivity] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await get(`/activities/${id}`);
      if (result.ok) setActivity(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) return <Loader />;

  if (!activity)
    return (
      <section className={styles.error}>
        <h1>La actividad no existe</h1>
        <p>
          La actividad que buscas no existe.
          <br />
          <Link to={'/'}>Volver a la página de inicio</Link>
        </p>
      </section>
    );

  return (
    <section className={styles.activity}>
      <h1 className={styles.activity_name}>{activity.name}</h1>
      <img
        className={styles.activity_image}
        src={activity.image}
        alt={activity.name}
      />
      <p className={styles.activity_content}>{activity.content}</p>
    </section>
  );
};

export default Activity;
