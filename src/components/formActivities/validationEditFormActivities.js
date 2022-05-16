import * as Yup from "yup";
export const URL_REQUIRED = "Imagen inválida.";

export const formEditActivitiesValidationSchema = Yup.object().shape({
    image: Yup.string()
            .url(URL_REQUIRED)
})