import React from 'react';
import styles from './Activities.module.css';
import Activity from './Activity';

function Activities() {
  const activities = [
    { name: 'actividad1', msg: 'asd', id: 1 },
    { name: 'actividad2', msg: 'asd', id: 2 },
    { name: 'actividad3', msg: 'asd', id: 3 },
    { name: 'actividad4', msg: 'asd', id: 4 },
    { name: 'actividad5', msg: 'asd', id: 5 },
    { name: 'actividad6', msg: 'asd', id: 6 },
    { name: 'actividad7', msg: 'asd', id: 7 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tablecontent}>
        <table>
          <tr>
            <th className={styles.header1}>Actividad</th>
            <th>Acciones</th>
          </tr>
          {activities.map(act => (
            <Activity name={act.name} content={act.msg} id={act.id} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Activities;
