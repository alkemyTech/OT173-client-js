import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Loader } from '../loader/Loader';
import { editHomeFormValidationSchema } from './EditHomeFormValidation';
import styles from './EditHome.module.css';
import Carousel from '../carousel/Carousel';

const EditHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [welcomeText, setWelcomeText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async formData => {
    const { welcomeText } = formData;

    try {
      if (errorMessage) setErrorMessage('');
      // Add here the code to send the form data to the server
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        if (errorMessage) setErrorMessage('');

        const dummyWelcomeText = 'Texto de bienvenida de la home';
        setWelcomeText(dummyWelcomeText);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHomeData();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <section className={styles.edit_home}>
      <h1 className={styles.title}>Editar página de inicio</h1>
      <Formik
        initialValues={{
          welcomeText,
        }}
        validationSchema={editHomeFormValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, errors }) => {
          return (
            <Form className={styles.form}>
              <Field
                className={styles.welcome_text}
                type="text"
                name="welcomeText"
                placeholder="Texto de bienvenida"
                component="textarea"
              />
              <ErrorMessage name="welcomeText">
                {error => <div className={styles.error}>{error}</div>}
              </ErrorMessage>

              <Carousel />

              {errorMessage && (
                <div className={styles.error}>{errorMessage}</div>
              )}

              <button
                className={styles.submit}
                type="submit"
                disabled={isSubmitting || Object.entries(errors).length}
              >
                {isSubmitting ? 'Guardando...' : 'Guardar'}
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default EditHome;
