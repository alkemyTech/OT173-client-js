import swal from "sweetalert";

export const confirm = (data) => {
    return (swal({ ...data, icon: "warning", buttons: ["No", "Yes"] })
        .then(response =>
            !response
                ?
                { alert: swal({ text: "Cancelled", icon: "info", buttons: false, timer: "1100" }), success: false }
                :
                { alert: swal({ icon: "success", buttons: false, timer: "1100" }), success: true }
        ))
}

export const error = (data) => {
    return swal({ text: data, icon: "error", dangerMode: true })
}

export const info = (data) => {
    return swal({ text: data, icon: "info", timer: 1000, buttons: false })
}

export const success = (data) => {
    return swal({ ...data, icon: "success", dangerMode: true })
}
