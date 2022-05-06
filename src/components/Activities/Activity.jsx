import React from 'react';
import styles from './Activities.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Activity({ name, id }) {
  const destroy = function () {
    axios.delete(`http://localhost:3001/activities/${id}`);
    window.location.reload();
  };

  return (
    <tr>
      <td className={styles.tabledata}>
        <h2>{name}</h2>
      </td>
      <td className={styles.tabledata}>
        <div className={styles.actionbuttons}>
          <Link to={`/editactivity/${id}`}>
            <button className={`${styles.button} ${styles.editbutton}`}>
              Editar
            </button>
          </Link>
          <button
            className={`${styles.button} ${styles.deletebutton}`}
            onClick={destroy}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Activity;
