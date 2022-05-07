import { willDelete } from '../../services/alertService';
import { deleteCategory } from './deleteCategoryService';

export const showDeleteCategory = async (id, setIsLoading) => {
        //setIsLoading se utiliza para detectar cuando utilizar el Loader y cuando re renderizar la vista de las categorías,
    //ej: en el componente donde se utilice este helper, debe crear un [isLoading, setIsLoading] = useState(false),
    //tambien utilizarlo en el useEffect para volver a renderizar la lista de categories.
    const response = await willDelete({ title: "¿Está seguro que desea eliminar esta categoría de forma permanente?" })
   
    if (response) {
        await deleteCategory(id, setIsLoading);
    }
}

