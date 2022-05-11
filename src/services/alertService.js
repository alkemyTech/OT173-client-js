import swal from "sweetalert";

export const confirm = async (data) => {
    return await swal({ ...data, icon: "warning", buttons: ["No", "Si"] })
}

export const error = (data) => {
    return swal({text: data, icon: "error", dangerMode: true })
}

export const info = (data) => {
    return swal({ ...data, icon: "info" })
}

export const success = (data) => {
    return swal({ ...data, icon: "success" })
}
