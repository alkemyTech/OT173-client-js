import { fetchUser, clearState} from "../../../features/user/userSlice";

export const loginRequest = (dispatch, valueForm) => {
    dispatch(fetchUser(valueForm))
  };

  export const clearAlerts = (dispatch)=>{
    dispatch(clearState())
  }