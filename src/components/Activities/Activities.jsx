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
            <thead>
              <tr>
                <th className={styles.header}>Actividad</th>
                <th className={styles.actions}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(act => (
                <Activity key={act.id} name={act.name} id={act.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Activities;
