import { fetchUser, clearState} from "../../../features/user/userSlice";


export const loginRequest = (dispatch, toast, valueForm) => {
  toast.error('Error al iniciar sesión ⚠️', {
    position: "top-right",
    autoClose: 5000
    });
  dispatch(fetchUser(valueForm))
};

export const clearAlerts = (dispatch)=>{
  dispatch(clearState())
}