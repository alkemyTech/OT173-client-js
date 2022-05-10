import { success, error as popUpError } from "./alertService"
import { remove } from "./apiService"

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