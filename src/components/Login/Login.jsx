import { Formik, Field, Form } from "formik";
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from "../../helpers/loginFormSettings/loginFormValidation";
import LoginStyles from "./Login.module.css";
import { useLogin } from "./useLogin";

const Login = () => {
  const [error, handleSubmit ] = useLogin();
  
  return (
    <>
      {error && <div className={LoginStyles.error_tologin}>{error}</div>}
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
