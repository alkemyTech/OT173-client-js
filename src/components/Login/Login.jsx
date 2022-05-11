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
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logInSubmit = async formvalue => {
    const { ok, error, data } = await loginRequest(formvalue);
    if (ok) {
      const { email } = formvalue;
      dispatch(login({ email, token: data.token }));
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
          <h1 className={LoginStyles.title}>Iniciar sesión</h1>
          <div className={LoginStyles.login_img_container}>
            <img
              src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png"
              alt="Iniciar sesión"
            />
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
                    <Field
                      className={LoginStyles.login_form_field_input}
                      placeholder="E-mail"
                      name="email"
                    />
                    {errors.email && (
                      <span className={LoginStyles.login_form_error}>
                        {logInHandleError(errors).email()}
                      </span>
                    )}
                  </div>

                  <div className={LoginStyles.login_form_field}>
                    <Field
                      className={LoginStyles.login_form_field_input}
                      name="password"
                      placeholder="Contraseña"
                      type="password"
                    />
                    {errors.password && (
                      <span className={LoginStyles.login_form_error}>
                        {logInHandleError(errors).password()}
                      </span>
                    )}
                  </div>

                  <button className={LoginStyles.submit} type="submit">
                    <span>Iniciar sesión</span>
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
