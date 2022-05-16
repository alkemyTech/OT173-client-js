import * as Yup from "yup";

export const NAME_REQUIRED = "El nombre es requerido.";
export const IMAGE_REQUIRED = "La imagen es requerida.";
export const URL_REQUIRED = "Imagen inválida.";
export const CONTENT_REQUIRED = "El contenido es requerido.";

export const formActivitiesValidationSchema = Yup.object().shape({
    name: Yup.string().required(NAME_REQUIRED),
    image: Yup.string()
        .required(IMAGE_REQUIRED)
        .url(URL_REQUIRED),
    content: Yup.string()
            .required(CONTENT_REQUIRED)
})