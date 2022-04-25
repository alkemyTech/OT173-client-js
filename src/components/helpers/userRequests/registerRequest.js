import { registerUser } from "../../../features/user/userSlice"
export const registerRequest = (dispatch,formValue) =>{
    dispatch(registerUser(formValue))

}