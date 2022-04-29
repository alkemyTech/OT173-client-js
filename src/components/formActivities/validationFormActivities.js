import * as Yup from "yup";

export const NAME_REQUIRED = "El nombre es requerido.";
export const CONTENT_REQUIRED = "El contenido es requerido.";

export const formNewsValidationSchema = Yup.object().shape({
    name: Yup.string().required(NAME_REQUIRED)
})