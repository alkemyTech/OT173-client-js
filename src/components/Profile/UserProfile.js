import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { confirm } from '../../services/alertService';
import { destroy } from '../../services/apiService';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch()

  const handleLogout = () => {
    window.location.reload()
    dispatch(logout());
  }

  const handleDelete = async (id) => {
    const confirmation = await confirm({ text: "Seguro que quieres eliminar tu cuenta?" });
    if (confirmation.success) {
      const remove = function () {
        destroy(`${process.env.REACT_APP_API_URI}/users/${id}`);
        handleLogout()
      };
      setTimeout(remove, 1100);
    }
  };

  return (
    <>
      <section className={styles.user_profile}>
        <h1 className={styles.title}>Mi perfil</h1>

        <div className={styles.user_data}>
          <div className={styles.field}>
            <span className={styles.field_name}>Nombre: </span>
            <span className={styles.field_value}>{user.firstName}</span>
          </div>

          <div className={styles.field}>
            <span className={styles.field_name}>Apellido: </span>
            <span className={styles.field_value}>{user.lastName}</span>
          </div>

          <div className={styles.field}>
            <span className={styles.field_name}>Correo electrónico: </span>
            <span className={styles.field_value}>{user.email}</span>
          </div>
        </div>

        <div className={styles.options}>
          <button className={styles.button}>Editar datos</button>
          <button className={`${styles.button} ${styles.danger}`} onClick={() => handleDelete(user.id)}>
            Eliminar cuenta
          </button>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
