import * as Yup from "yup";

export const TITLE_REQUIRED = "El título es requerido.";
export const CATEGORY_REQUIRED = "La categoría es requerida.";
export const IMAGE_REQUIRED = "La imagen es requerida.";
export const IMAGE_FORMAT = "Imagen inválida.";
export const CONTENT_REQUIRED = "El contenido es requerido.";

const availableFormat = [ "jpeg", "jpg", "gif", "png" ]
const formatValidation = /\.(jpg|png|gif)$/i

export const formNewsValidationSchema = Yup.object().shape({
    title: Yup.string().required(TITLE_REQUIRED),
    category: Yup.string().required(CATEGORY_REQUIRED),
    image: Yup
    .string()
    .required(IMAGE_REQUIRED)
    .url(IMAGE_FORMAT)
    /* .matches(formatValidation.contains(image.substring(image.indexOf(".") + 1, image.length)), IMAGE_FORMAT) */
})