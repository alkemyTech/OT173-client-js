import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URI;

const getHeaders = () => {
  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem('token');
  if (token) headers.Authorization = `Bearer ${token}`;

  return headers;
};

export const get = async url => {
  const headers = getHeaders();
  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (err) {
    return err;
  }
};

export const post = async (url, body) => {
  const headers = getHeaders();
  try {
    const response = await axios.post(url, body, { headers });
    return response;
  } catch (err) {
    return err;
  }
};
