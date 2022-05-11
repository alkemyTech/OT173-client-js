import React from 'react';
import styles from './Activities.module.css';
import { Link } from 'react-router-dom';
import { destroy } from '../../services/apiService';
import { confirm } from '../../services/alertService';

function Activity({ name, id }) {
  const handleDelete = async () => {
    const confirmation = await confirm();
    if (confirmation.success) {
      const remove = function () {
        destroy(`http://localhost:3001/activities/${id}`);
        window.location.reload();
      };
      setTimeout(remove, 1100);
    }
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
            onClick={() => handleDelete()}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Activity;
