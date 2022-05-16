import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router';
import { signUpRequest } from '../../services/authService';
import { error as popUpError } from '../../services/alertService';
import { signUpFormValidationSchema } from './SignUpFormValidation';
import styles from './SignUp.module.css';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpSubmit = async formvalue => {
    const { ok, error, data } = await signUpRequest(formvalue);
    if (ok) {
      const { email } = formvalue;
      dispatch(login({ email, token: data.token }));
      navigate('/');
    } else {
      popUpError({ text: `${error.message}` });
    }
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (
    <>
      <Header logo={'/images/assets/logo1.png'} menu={[]} />
      <section className={styles.sign_up_wrapper}>
        <div className={styles.sign_up}>
          <h1 className={styles.title}>Registrarse</h1>
          <div className={styles.image_container}>
            <img
              src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png"
              alt="Registrarse"
            />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpFormValidationSchema}
            onSubmit={signUpSubmit}
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

                <Field
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                <ErrorMessage name="password">
                  {error => <div className={styles.error}>{error}</div>}
                </ErrorMessage>
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
        </div>
      </section>
    </>
  );
};

export default SignUp;
