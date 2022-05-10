import swal from "sweetalert";

export const confirm = (data) => {
    return (swal({ ...data, icon: "warning", buttons: ["No", "Yes"] })
                .then(response =>
                    !response
                    ?
                    swal({ text: "Cancelled", icon: "info", buttons: false, timer: "1100" })
                    :
                    swal({ icon: "success", buttons: false, timer: "1100" })
            ))
}

export const error = (data) => {
    return swal({ ...data, icon: "error", dangerMode: true })
}

export const info = (data) => {
    return swal({ ...data, icon: "info" })
}

export const success = (data) => {
    return swal({ ...data, icon: "success", dangerMode: true })
}