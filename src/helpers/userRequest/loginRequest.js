import {post} from "../../services/apiService"
export const loginRequest = async (valueForm,navigate,toast) => {
      const loginResponse = await post("http://localhost:4000/auth/login",valueForm)
      if(loginResponse.ok){
        navigate("/")
      }else{
        toast.error('Error to LoginIn ⚠️', {
          position: "top-right",
          autoClose: 5000
          });
      }
    
  };

