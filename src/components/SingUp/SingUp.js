import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { initialValuesSingUpForm } from './SingUpFormValues';
import { singUpFormValidationSchema } from './SingUpFormValidation';
import styles from './SingUp.module.css';

const SingUp = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async formData => {
    const { firstName, lastName, email, password } = formData;

    try {
      if (errorMessage) setErrorMessage('');
      // Add here the Fetch logic
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <section className={styles.sing_up}>
      <h1 className={styles.title}>Formulario de registro</h1>

      <Formik
        initialValues={initialValuesSingUpForm}
        validationSchema={singUpFormValidationSchema}
        onSubmit={handleSubmit}
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

            {errorMessage && <div className={styles.error}>{errorMessage}</div>}

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
