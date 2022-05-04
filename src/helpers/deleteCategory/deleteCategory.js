import swal from 'sweetalert';
import { confirm, willDelete } from '../../services/alertService';
import { remove } from '../../services/apiService';

export const showDeleteAlert = (id, setIsLoading) => {
    //setIsLoading se utiliza para detectar cuando utilizar el Loader y cuando re renderizar la vista de las categorías,
    //ej: en el componente donde se utilice este helpers, debe crear un [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {

        willDelete({
            title: "¿Está seguro que desea eliminar esta categoría de forma permanente?"
        }).then(response => {
            if (response) {
                // setIsLoading(true);
                remove(`categories/${id}`)
                    .then(({ ok }) =>
                        ok
                            ?
                            swal({ icon: "success", buttons: false, timer: "1100" }) && setIsLoading(false)
                            :
                            swal({ icon: "error", buttons: false, timer: "1100" }) && setIsLoading(false)
                    )
            }
        });
    }

    return handleClick
};
