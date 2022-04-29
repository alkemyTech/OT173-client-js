import swal from "sweetalert";

export const confirm = (data) => {
    return (swal({ ...data, icon: "warning", buttons: ["No", "Yes"] })
                .then(response =>
                    response
                    ?
                    true
                    :
                    false
            ))
}

export const error = (data) => {
    return swal({ ...data, icon: "error", dangerMode: true })
}

export const info = (data) => {
    return swal({ ...data, icon: "info" })
}