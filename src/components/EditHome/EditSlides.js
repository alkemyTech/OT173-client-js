import React from 'react';
import { Field, FieldArray, ErrorMessage } from 'formik';

import PreviewImageSlide from './PreviewImageSlide';
import styles from './EditSlides.module.css';

const EditSlides = ({
  values,
  setFieldTouched,
  setFieldValue,
  errorClassName,
}) => {
  return (
    <fieldset className={styles.slide_list}>
      <FieldArray
        name="slides"
        render={() =>
          values.slides.map((_, index) => (
            <div key={index} className={styles.slide}>
              <Field
                as={PreviewImageSlide}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                type="file"
                name={`slides.${index}.image`}
              />
              <ErrorMessage name={`slides[${index}].image`}>
                {error => <div className={errorClassName}>{error}</div>}
              </ErrorMessage>

              <Field
                type="text"
                name={`slides.${index}.text`}
                placeholder="Texto de la slide"
                className={styles.slide_text}
              />
              <ErrorMessage name={`slides.${index}.text`}>
                {error => <div className={errorClassName}>{error}</div>}
              </ErrorMessage>
            </div>
          ))
        }
      />
    </fieldset>
  );
};

export default EditSlides;
