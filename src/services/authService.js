import { post } from './apiService';

export const signUpRequest = async valueForm =>
  await post('http://localhost:4000/auth/signup', valueForm);

export const loginRequest = async formValue =>
  await post('http://localhost:4000/auth/login', formValue);
