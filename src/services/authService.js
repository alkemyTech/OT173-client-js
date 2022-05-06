import { post } from './apiService';

export const signUpRequest = async valueForm =>
  await post('/auth/register', valueForm);

export const loginRequest = async formValue =>
  await post('users/auth/login', formValue);
