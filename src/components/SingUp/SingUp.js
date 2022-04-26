import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector,useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import { signUpRequest } from '../../helpers/userRequest/signUpRequest';
import { clearAlerts } from '../../helpers/userRequest/loginRequest';
import { singUpFormValidationSchema } from './SingUpFormValidation';
import { Loader } from '../loader/Loader';
import styles from './SingUp.module.css';

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

  useEffect(() => {
    return () => {
      clearAlerts(dispatch);
    };
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error('Error to SignUp ⚠️', {
        position: "top-right",
        autoClose: 5000
        });
      clearAlerts(dispatch);
    }
    if (isSuccess) {
      navigate('/login');
      clearAlerts(dispatch);
    }
  }, [error, isSuccess, dispatch, navigate]);

  return (
    <section className={styles.sing_up}>
      <ToastContainer/>
      <h1 className={styles.title}>Formulario de registro</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={singUpFormValidationSchema}
        onSubmit={(formValue)=>signUpRequest(dispatch,formValue)}
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
              <span>Log In</span>
                    {isFetching ? <Loader height={20} width={20} /> : null}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SingUp;