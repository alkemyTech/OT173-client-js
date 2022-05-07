import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router';
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from '../../helpers/loginFormSettings/loginFormValidation';
import { loginRequest } from '../../services/authService';
import { error as popUpError } from '../../services/alertService';
import LoginStyles from './Login.module.css';
import Header from '../Header/Header';
const Login = () => {
  const navigate = useNavigate();

  const logInSubmit = async formvalue => {
    const { ok, error } = await loginRequest(formvalue);
    if (ok) {
      navigate('/');
    } else {
      popUpError({ text: `${error.message}` });
    }
  };
  return (
    <>
      <Header logo={'/images/assets/logo1.png'} menu={[]} />
      <div className={LoginStyles.login_wrapper}>
        <div className={LoginStyles.login}>
          <div className={LoginStyles.login_img}>
            <img src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png" alt="" />
          </div>
          <Formik
            initialValues={initialLoginValue}
            validationSchema={loginSchema}
            onSubmit={logInSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validateOnMount={false}
          >
            {({ errors }) => {
              return (
                <Form className={LoginStyles.login_form}>
                  <div className={LoginStyles.login_form_field}>
                    <span htmlFor="email">Email</span>
                    <Field
                      className={LoginStyles.login_form_field_input}
                      placeholder="Enter email...."
                      name="email"
                    />
                  </div>
                  {logInHandleError(errors).email()}
                  <div className={LoginStyles.login_form_field}>
                    <span>Password</span>
                    <Field
                      className={LoginStyles.login_form_field_input}
                      name="password"
                      type="password"
                    />
                  </div>
                  {logInHandleError(errors).password()}
                  <button type="submit">
                    <span>Log In</span>
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
