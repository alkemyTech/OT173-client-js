import { success, error as popUpError } from "../../services/alertService"
import { remove } from "../../services/apiService"

export const deleteCategory = async (id, setIsLoading) => {
    setIsLoading(true);
    const { ok, error } = await remove(`/categories/${id}`);
    if (ok) {
        success({ text: "Categoría eliminada correctamente" });
        setIsLoading(false);
    } else {
        popUpError({ text: `${error.message}` });
        setIsLoading(false);
    }
}