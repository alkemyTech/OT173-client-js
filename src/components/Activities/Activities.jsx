import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Activities.module.css';
import Activity from './Activity';
import { get } from '../../services/apiService';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await get('http://localhost:3001/activities');
      setActivities(results.data);
    }
    fetchData();
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
              <Activity name={act.name} id={act.id} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Activities;
