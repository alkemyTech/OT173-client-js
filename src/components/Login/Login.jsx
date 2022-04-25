import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from '../../helpers/loginFormSettings/loginFormValidation';
import {
  loginRequest,
  clearAlerts,
} from '../helpers/userRequests/loginRequest';
import LoginStyles from './Login.module.css';
import { Loader } from '../loader/Loader';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isFetching, isSuccess } = useSelector(state => state.user);
  useEffect(() => {
    return () => {
      clearAlerts(dispatch);
    };
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      clearAlerts(dispatch);
    }
    if (isSuccess) {
      navigate('/');
      clearAlerts(dispatch);
    }
  }, [error, isSuccess, dispatch, navigate]);
  return (
    <>
      <ToastContainer
      />
      <div className={LoginStyles.login_wrapper}>
        <div className={LoginStyles.login}>
          <div className={LoginStyles.login_img}>
            <img src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png" alt="" />
          </div>
          <Formik
            initialValues={initialLoginValue}
            validationSchema={loginSchema}
            onSubmit={formValue => loginRequest(dispatch, toast, formValue)}
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
                    {isFetching ? <Loader height={20} width={20} /> : null}
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