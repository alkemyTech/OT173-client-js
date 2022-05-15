import * as Yup from "yup";

export const initialOrganizationValue = {
    name:"",
    logo:""
}

export const organizationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  logo: Yup.string().url('invalid url').required("url is Required"),
});

export const organizationHandleError = (errors) => {
  return {
    name: () => {
      return errors.name && <div className="login-form__error">{errors.name}</div> 
    },
    logo: () => {
      return errors.logo && <div className="login-form__error">{errors.logo}</div>;
    },
  };
};
