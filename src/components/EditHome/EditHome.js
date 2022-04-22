import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Loader } from '../loader/Loader';
import EditSlides from './EditSlides';
import { editHomeFormValidationSchema } from './EditHomeFormValidation';
import styles from './EditHome.module.css';

// This function creates a file from an image URL for testing purposes
// I use it to simulate a image File returned by the API
// Remove it when the real fetch logic is implemented!
const createFileFromImageURL = async url => {
  const response = await fetch(url);
  const data = await response.blob();
  const metadata = {
    type: 'image/jpeg',
  };
  return new File([data], 'test.jpg', metadata);
};

const EditHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [welcomeText, setWelcomeText] = useState('');
  const [slides, setSlides] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async formData => {
    const { welcomeText, slides } = formData;

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

        // Replace all the following lines with the Fetch logic !
        const dummyWelcomeText = 'Texto de bienvenida de la home';
        const imageFile = await createFileFromImageURL(
          'https://picsum.photos/250/300'
        );
        const imageFile2 = await createFileFromImageURL(
          'https://picsum.photos/250/350'
        );
        const imageFile3 = await createFileFromImageURL(
          'https://picsum.photos/200/300'
        );
        const dummySlides = [
          {
            image: imageFile,
            text: 'Texto de la primer slide',
          },
          {
            image: imageFile2,
            text: 'Texto de la segunda slide',
          },
          {
            image: imageFile3,
            text: 'Texto de la tercera slide',
          },
        ];

        setWelcomeText(dummyWelcomeText);
        setSlides(dummySlides);
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
          slides,
        }}
        validationSchema={editHomeFormValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, values, errors, setFieldValue, setFieldTouched }) => {
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

              <EditSlides
                values={values}
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                errorClassName={styles.error}
              />

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
