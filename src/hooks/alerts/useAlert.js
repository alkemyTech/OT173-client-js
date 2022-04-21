import React from 'react';
import swal from "sweetalert";

export const useAlert = (props) => {

    const setAlert = (data) => {

        swal(data)
            .then(response =>
                !response
                    ?
                    swal({ text: "Cancelled", icon: "info", buttons: false, timer: "1100" })
                    :
                    swal({ icon: "success", buttons: false, timer: "1100" })
            )
    }

    const getAlert = () => {
        return setAlert(props)
    }

    return {setAlert, getAlert}
}