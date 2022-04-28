import React, { useState } from 'react';
import styles from './Activities.module.css';

function Activities() {
  const [isEditing, setIsEditing] = useState(false);
  const activities = [
    'actividad1',
    'actividad2',
    'actividad3',
    'actividad4',
    'actividad5',
    'actividad6',
    'actividad7',
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
            <tr>
              <td className={styles.tabledata}>{act}</td>
              <td className={styles.tabledata}>
                {isEditing ? (
                  <>
                    <button className={`${styles.button} ${styles.savebutton}`}>
                      Guardar
                    </button>
                    <button
                      className={`${styles.button} ${styles.deletebutton}`}
                      onClick={() => setIsEditing(false)}
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`${styles.button} ${styles.editbutton}`}
                      onClick={() => setIsEditing(true)}
                    >
                      Editar
                    </button>
                    <button
                      className={`${styles.button} ${styles.deletebutton}`}
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Activities;
