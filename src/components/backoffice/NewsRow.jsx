import React from 'react';
import styles from './News.module.css';
import { Link } from 'react-router-dom';
import { confirm } from '../../services/alertService';
import { destroy } from '../../services/apiService';

function NewsRow({ name, image, createdAt, id }) {
  const handleDelete = async () => {
    const confirmation = await confirm();
    if (confirmation.success) {
      const remove = function () {
        destroy(`http://localhost:3001/news/${id}`);
        window.location.reload();
      };
      setTimeout(remove, 1100);
    }
  };

  return (
    <tr>
      <td className={styles.tabledata}>
        <p>{name}</p>
      </td>
      <td className={styles.tabledata}>
        <p>{image}</p>
      </td>
      <td className={styles.tabledata}>
        <p>{createdAt}</p>
      </td>
      <td className={styles.tabledata}>
        <div className={styles.actionbuttons}>
          <Link to={`/editnews/${id}`}>
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

export default NewsRow;
