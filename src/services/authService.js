import { post } from './apiService';
import { error } from './alertService';

export const signUpRequest = async (valueForm, navigate) => {
  const signUpResponse = await post(
    'http://localhost:4000/auth/signup',
    valueForm
  );
  if (signUpResponse.ok) {
    navigate('/');
  } else {
    error({
      text: 'Error to Sign Up',
    });
  }
};

export const loginRequest = async (formValue, navigate) => {
  const loginResponse = await post(
    'http://localhost:4000/auth/login',
    formValue
  );
  if (loginResponse.ok) {
    navigate('/');
  } else {
    error({
      text: 'Error to login',
    });
  }
};
