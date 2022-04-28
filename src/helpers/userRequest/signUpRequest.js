import {post} from "../../services/apiService"
export const signUpRequest = async (valueForm,navigate,toast) => {
      const signUpResponse = await post("http://localhost:4000/auth/signup",valueForm)
      if(signUpResponse.ok){
        navigate("/")
      }else{
        toast.error('Error to Sign Up ⚠️', {
          position: "top-right",
          autoClose: 5000
          });
      }
    
  };

