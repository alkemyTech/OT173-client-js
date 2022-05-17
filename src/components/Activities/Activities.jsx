import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Activities.module.css';
import Activity from './Activity';
import { get } from '../../services/apiService';
import { error as serviceError } from '../../services/alertService';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { ok, data, error } = await get(`${process.env.REACT_APP_API_URI}/activities`);
      if (ok) {
        setActivities(data);
      } else {
        serviceError(error.message);
      }
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
