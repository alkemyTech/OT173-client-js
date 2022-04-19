import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { initialValuesSingUpForm, formErrorMessages } from './SingUpFormValues';
import styles from './SingUp.module.css';

const singUpFormSchema = Yup.object().shape({
  firstName: Yup.string().required(formErrorMessages.FIRST_NAME_REQUIRED),
  lastName: Yup.string().required(formErrorMessages.LAST_NAME_REQUIRED),
  email: Yup.string()
    .required(formErrorMessages.EMAIL_REQUIRED)
    .email(formErrorMessages.EMAIL_INVALID),
  password: Yup.string()
    .required(formErrorMessages.PASSWORD_REQUIRED)
    .min(6, formErrorMessages.PASSWORD_MIN_LENGTH),
});

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
        validationSchema={singUpFormSchema}
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
