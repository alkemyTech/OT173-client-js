import { remove } from "../../services/apiService"

export const deleteCategory = async id => {
    return await remove(`users/categories/${id}`)
}