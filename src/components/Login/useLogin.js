import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";
import { post } from "../../services/apiService";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
  
    const handleSubmit = async ({ email, password }) => {
      try {
        const response = await post('/users/auth/login', ({ email, password }));
        if (!response.ok) {
          setError(response.error.response.data.msg)
          setTimeout(() => {
            setError(null)
          }, 3000);
          return;
        }
  
        dispatch(login({
          email,
          loggedIn: true
        }));
  
      } catch (err) {
        console.log(err);
      }
    }
    return [error, handleSubmit]
}
