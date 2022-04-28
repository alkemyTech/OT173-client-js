import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { signUpRequest } from '../../helpers/userRequest/signUpRequest';
import { signUpFormValidationSchema } from './SignUpFormValidation';
import styles from './SignUp.module.css';

const SingUp = () => {
  const navigate = useNavigate()
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (
    <section className={styles.sing_up}>
      <ToastContainer/>
      <h1 className={styles.title}>Formulario de registro</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpFormValidationSchema}
        onSubmit={formValue=>signUpRequest(formValue,navigate,toast)}
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
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SingUp;