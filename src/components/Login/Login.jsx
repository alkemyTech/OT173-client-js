import { Formik, Field, Form } from "formik";
import { useState } from "react";
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from "../../helpers/loginFormSettings/loginFormValidation";
import { login } from "../../features/user/userSlice";
import LoginStyles from "./Login.module.css";
import { post } from "../../services/apiService";
import { useDispatch } from 'react-redux';

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const URL_POST = 'http://localhost:3000/users/auth/login';

  const handleSubmit = async ({ email, password }) => {

    try {
      const response = await post(URL_POST, ({ email, password }));

      if (!response.ok) {
        setError("Error To Login")
        setTimeout(() => {
          setError(null)
        }, 3000);
        return;
      }

      dispatch(login({
        email,
        password,
        loggedIn: true
      }));

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {error && <div className={LoginStyles.error_tologin}>Error to login</div>}
      <div className={LoginStyles.login_wrapper}>
        <div className={LoginStyles.login}>
          <div className={LoginStyles.login_img}>
            <img src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png" alt="" />
          </div>
          <Formik
            initialValues={initialLoginValue}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
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
                    Log In
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
