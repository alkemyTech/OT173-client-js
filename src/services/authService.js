import { post } from './apiService';

export const signUpRequest = async valueForm =>
  await post('users/auth/signup', valueForm);

export const loginRequest = async formValue =>
  await post('users/auth/login', formValue);
