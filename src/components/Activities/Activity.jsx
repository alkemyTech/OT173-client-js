import React, { useState } from 'react';
import styles from './Activities.module.css';
import axios from 'axios';

function Activity({ name, image, content, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({
    name,
    image,
    content,
  });

  const destroy = function () {
    axios.delete(`http://localhost:3001/activities/${id}`);
    window.location.reload();
  };
  const save = function () {
    axios.put(`http://localhost:3001/activities/${id}`, input);
    window.location.reload();
  };

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <tr>
      <td className={styles.tabledata}>
        {isEditing ? (
          <div className={styles.inputcontainer}>
            <label>Nombre</label>
            <input
              className={styles.input}
              onChange={handleInputChange}
              name="name"
              type="text"
              value={input.name}
            />
            <label>Contenido</label>
            <input
              className={styles.input}
              onChange={handleInputChange}
              name="content"
              type="text"
              value={input.content}
            />
            <label>Imagen</label>
            <input
              className={styles.input}
              onChange={handleInputChange}
              name="image"
              type="text"
              value={input.image}
            />
          </div>
        ) : (
          <h2>{name}</h2>
        )}
      </td>
      <td className={styles.tabledata}>
        {isEditing ? (
          <div className={styles.actionbuttons}>
            <button
              className={`${styles.button} ${styles.savebutton}`}
              onClick={save}
            >
              Guardar
            </button>
            <button
              className={`${styles.button} ${styles.deletebutton}`}
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div className={styles.actionbuttons}>
            <button
              className={`${styles.button} ${styles.editbutton}`}
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button
              className={`${styles.button} ${styles.deletebutton}`}
              onClick={destroy}
            >
              Eliminar
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default Activity;
