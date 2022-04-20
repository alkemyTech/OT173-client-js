import { Formik, Field, Form } from "formik";
import { useState } from "react";
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from "../../helpers/loginFormSettings/loginFormValidation";
import { loginRequest } from "../../helpers/loginFormSettings/loginRequest";
import LoginStyles from "./Login.module.css";

const Login = () => {
  const [error, setError] = useState(null);
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
            onSubmit={(formValue) => loginRequest(formValue, setError)}
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
                      placeholder="Enter email..."
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
