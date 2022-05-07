import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router';
import { signUpRequest } from '../../services/authService';
import { error as popUpError } from '../../services/alertService';
import { signUpFormValidationSchema } from './SignUpFormValidation';
import styles from './SignUp.module.css';
import Header from '../Header/Header';

const SingUp = () => {
  const navigate = useNavigate()
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const signUpSubmit = async formvalue => {
    const { ok, error } = await signUpRequest(formvalue)
    if (ok) {
      navigate("/")
    } else {
      popUpError({ text: `${error.message}` })
    }
  }
  return (
    <>
      <Header logo={"/images/assets/logo1.png"} menu={[]} />
      <section className={styles.sing_up}>
        <h1 className={styles.title}>Formulario de registro</h1>
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

              <Field type="password" name="password" placeholder="Contraseña" />
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
      </section>
    </>
  );
};

export default SingUp;