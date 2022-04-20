import * as Yup from 'yup';

const WELCOME_TEXT_REQUIRED = 'El texto de bienvenida es requerido';
const WELCOME_TEXT_MIN_LENGTH =
  'El texto de bienvenida de tener al menos 20 caracteres';
const SLIDE_TEXT_REQUIRED = 'El texto de la slide es requerido';
const SLIDE_IMAGE_REQUIRED = 'La imagen de la slide es requerida';
const SLIDE_IMAGE_FORMAT = 'El formato de la imagen de la slide no es válido';

export const SUPPORTED_IMAGE_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const editHomeFormValidationSchema = Yup.object().shape({
  welcomeText: Yup.string()
    .trim()
    .required(WELCOME_TEXT_REQUIRED)
    .min(20, WELCOME_TEXT_MIN_LENGTH),
  slides: Yup.array().of(
    Yup.object().shape({
      text: Yup.string().trim().required(SLIDE_TEXT_REQUIRED),
      image: Yup.mixed()
        .required(SLIDE_IMAGE_REQUIRED)
        .test(
          'fileFormat',
          SLIDE_IMAGE_FORMAT,
          value => value && SUPPORTED_IMAGE_FORMATS.includes(value.type)
        ),
    })
  ),
});
