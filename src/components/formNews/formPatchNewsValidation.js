import * as Yup from "yup";
export const IMAGE_FORMAT = "Imagen inválida.";

export const formPatchNewsValidationSchema = Yup.object().shape({
    image: Yup
    .string()
    .url(IMAGE_FORMAT)
})