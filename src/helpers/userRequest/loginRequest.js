import {post} from "../../services/apiService"
import { error } from "../../services/alertService";
export const loginRequest = async (valueForm,navigate) => {
      const loginResponse = await post("http://localhost:4000/auth/login",valueForm)
      if(loginResponse.ok){
        navigate("/")
      }else{
       error({
         text:"Error to login"
       })
      }
    
  };

