import * as Yup from 'yup';

const WELCOME_TEXT_REQUIRED = 'El texto de bienvenida es requerido';
const WELCOME_TEXT_MIN_LENGTH =
  'El texto de bienvenida de tener al menos 20 caracteres';

export const editHomeFormValidationSchema = Yup.object().shape({
  welcomeText: Yup.string()
    .trim()
    .required(WELCOME_TEXT_REQUIRED)
    .min(20, WELCOME_TEXT_MIN_LENGTH),
});
