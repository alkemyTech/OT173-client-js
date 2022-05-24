import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Activity from './Activity';
import { get } from '../../services/apiService';
import { error as serviceError } from '../../services/alertService';
import styles from './Activities.module.css';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { ok, data, error } = await get(
        `${process.env.REACT_APP_API_URI}/activities`
      );
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
      <div className={styles.container}>
        <div className={styles.activities_header}>
          <span className={styles.activities_title}>Lista de actividades</span>
          <Link
            className={styles.activities_create}
            to="/backoffice/activities/create"
          >
            Crear
          </Link>
        </div>
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
