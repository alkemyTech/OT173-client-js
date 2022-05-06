import * as Yup from "yup";

export const NAME_REQUIRED = "El nombre es requerido.";
export const CATEGORY_REQUIRED = "La categoría es requerida.";
export const IMAGE_REQUIRED = "La imagen es requerida.";
export const IMAGE_FORMAT = "Imagen inválida.";
export const CONTENT_REQUIRED = "El contenido es requerido.";

export const formNewsValidationSchema = Yup.object().shape({
    name: Yup.string().required(NAME_REQUIRED),
    category: Yup.string().required(CATEGORY_REQUIRED),
    image: Yup
    .string()
    .required(IMAGE_REQUIRED)
    .url(IMAGE_FORMAT),
    content: Yup.string().required(CONTENT_REQUIRED)
})