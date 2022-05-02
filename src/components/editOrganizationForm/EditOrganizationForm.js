import React from 'react';
import Header from '../Header/Header';
import LoginStyles from './Login.module.css';
import { Formik, Field, Form } from 'formik';
import {
  initialOrganizationValue,
  organizationSchema,
  organizationHandleError,
} from './../../helpers/editFormOrganization/EditFormOrganization';

export const EditOrganizationForm = () => {
  return (
    <>
      <Header logo={'https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png'} menu={[]} />
      <div className={LoginStyles.login_wrapper}>
        <div className={LoginStyles.login}>
          <div className={LoginStyles.login_img}>
            <img src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png" alt="" />
          </div>
          <Formik
            initialValues={initialOrganizationValue}
            validationSchema={organizationSchema}
            onSubmit={formValue => {}}
            validateOnChange={false}
            validateOnBlur={false}
            validateOnMount={false}
          >
            {({ errors }) => {
              return (
                <Form className={LoginStyles.login_form}>
                  <div className={LoginStyles.login_form_field}>
                    <span htmlFor="name">Name Organization</span>
                    <Field
                      className={LoginStyles.login_form_field_input}
                      placeholder="new name"
                      name="name"
                    />
                  </div>
                  {organizationHandleError(errors).name()}
                  <div className={LoginStyles.login_form_field}>
                    <span>New Logo</span>
                    <Field
                      className={LoginStyles.login_form_field_input}
                      placeholder="new logo"
                      type="text"
                      name="logo"
                    />
                  </div>
                  {organizationHandleError(errors).logo()}
                  <button type="submit">Update</button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};
