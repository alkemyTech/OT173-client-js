import { signUpUser } from "../../features/user/userSlide"
export const signUpRequest = (dispatch,formValue) =>{
    dispatch(signUpUser(formValue))

}