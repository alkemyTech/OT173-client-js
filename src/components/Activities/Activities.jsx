import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Activities.module.css';
import Activity from './Activity';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/activities').then(response => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <Header logo={'/images/assets/logo1.png'} menu={[]} />
      <div className={styles.container}>
        <div className={styles.tablecontent}>
          <table>
            <tr>
              <th className={styles.header}>Actividad</th>
              <th className={styles.actions}>Acciones</th>
            </tr>
            {activities.map(act => (
              <Activity name={act.name} content={act.content} image={act.image} id={act.id} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Activities;
