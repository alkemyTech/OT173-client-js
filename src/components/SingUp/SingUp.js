import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector,useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { registerRequest } from '../helpers/userRequests/registerRequest';
import { singUpFormValidationSchema } from './SingUpFormValidation';
import styles from './SingUp.module.css';
import { useNavigate } from 'react-router';

const SingUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isFetching,error,isSuccess} = useSelector(state=>state.user)
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (
    <section className={styles.sing_up}>
      <h1 className={styles.title}>Formulario de registro</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={singUpFormValidationSchema}
        onSubmit={(formValue)=>registerRequest(dispatch,formValue)}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field type="text" name="firstName" placeholder="Nombre" />
            <ErrorMessage name="firstName">
              {error => <div className={styles.error}>{error}</div>}
            </ErrorMessage>

            <Field type="text" name="lastName" placeholder="Apellido" />
            <ErrorMessage name="lastName">
              {error => <div className={styles.error}>{error}</div>}
            </ErrorMessage>

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email">
              {error => <div className={styles.error}>{error}</div>}
            </ErrorMessage>

            <Field type="password" name="password" placeholder="Contraseña" />
            <ErrorMessage name="password">
              {error => <div className={styles.error}>{error}</div>}
            </ErrorMessage>

            {}

            <button
              type="submit"
              className={styles.submit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Registrarme'}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SingUp;
