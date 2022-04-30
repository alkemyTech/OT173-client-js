import {post} from "../../services/apiService"
import { error } from "../../services/alertService";
export const signUpRequest = async (valueForm,navigate) => {
      const signUpResponse = await post("http://localhost:4000/auth/signup",valueForm)
      if(signUpResponse.ok){
        navigate("/")
      }else{
        error({
          text:"Error to Sign Up"
        });
      }
    
  };

