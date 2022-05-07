import * as Yup from 'yup';

export const FIRST_NAME_REQUIRED = '¿Cómo te llamas?';
export const LAST_NAME_REQUIRED = 'Necesitamos saber tu apellido';
export const EMAIL_REQUIRED = 'Escribe tu correo por favor';
export const EMAIL_INVALID = 'El correo no es valido';
export const PASSWORD_REQUIRED = 'Necesitas una contraseña para poder ingresar';
export const PASSWORD_MIN_LENGTH =
  'Tu contraseña debe tener al menos 6 caracteres';

export const signUpFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required(FIRST_NAME_REQUIRED),
  lastName: Yup.string().required(LAST_NAME_REQUIRED),
  email: Yup.string().required(EMAIL_REQUIRED).email(EMAIL_INVALID),
  password: Yup.string()
    .required(PASSWORD_REQUIRED)
    .min(6, PASSWORD_MIN_LENGTH),
});
