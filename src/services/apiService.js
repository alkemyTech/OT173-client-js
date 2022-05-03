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
    const { data, status } = await axios.get(url, { headers });
    return { ok: true, data, status };
  } catch (err) {
    return { ok: false, error: err, status: 500 };
  }
};

export const post = async (url, body) => {
  const headers = getHeaders();
  try {
    const { data, status } = await axios.post(url, body, { headers });
    return { ok: true, data, status };
  } catch (err) {
    return { ok: false, error: err, status: 500 };
  }
};

export const patch = async (url, body) => {
  const headers = getHeaders();
  try {
    const { data, status } = await axios.patch(url, body, { headers });
    return { ok: true, data, status };
  } catch (err) {
    return { ok: false, error: err, status: 500 };
  }
};
