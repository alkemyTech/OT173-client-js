import { success, error as popUpError, confirm } from "./alertService";
import { destroy } from "./apiService";

export const showDeleteCategory = async (id, setIsLoading) => {
    const response = await confirm({ title: "¿Está seguro que desea eliminar esta categoría de forma permanente?" });
    if (response.success) {
        setIsLoading(true);
        const { ok, error } = await destroy(`/categories/${id}`);
        if (ok) {
            success({ text: "Categoría eliminada correctamente" });
            setIsLoading(false);
        } else {
            popUpError({ text: `${error.message}` });
            setIsLoading(false);
        };
    };
}