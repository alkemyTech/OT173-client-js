import * as Yup from "yup";

export const initialLoginValue = {
    email:"",
    password:""
}


export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Isn´t a valid email").required("Email is Required"),
  password: Yup.string().required("Password is Required").min(6,"Password must be at least length 6"),
});

export const logInHandleError = (errors) => {
  return {
    email: () => {
      return errors.email && <div className="login-form__error">{errors.email}</div> 
    },
    password: () => {
      return errors.password && <div className="login-form__error">{errors.password}</div>;
    },
  };
};
