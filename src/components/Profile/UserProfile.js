import React from 'react';

import styles from './UserProfile.module.css';

const DUMMY_USER = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
};

const UserProfile = () => {
  return (
    <section className={styles.user_profile}>
      <h1 className={styles.title}>Mi perfil</h1>

      <div className={styles.user_data}>
        <div className={styles.field}>
          <span className={styles.field_name}>Nombre: </span>
          <span className={styles.field_value}>{DUMMY_USER.firstName}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.field_name}>Apellido: </span>
          <span className={styles.field_value}>{DUMMY_USER.lastName}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.field_name}>Correo electrónico: </span>
          <span className={styles.field_value}>{DUMMY_USER.email}</span>
        </div>
      </div>

      <div className={styles.options}>
        <button className={styles.button}>Editar datos</button>
        <button className={`${styles.button} ${styles.danger}`}>
          Eliminar cuenta
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
