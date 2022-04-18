export const useApi = () => {
  const baseURL = process.env.REACT_APP_API_URI;
  const headers = { 'Content-Type': 'application/json' };

  const token = localStorage.getItem('token');
  if (token) headers.token = `Bearer ${token}`;

  const getResource = async url => {
    try {
      const response = await fetch(baseURL + url, {
        method: 'GET',
        headers,
      });

      return await response.json();
    } catch (err) {
      return err;
    }
  };

  const postResource = async (url, body) => {
    try {
      const response = await fetch(baseURL + url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      return await response.json();
    } catch (err) {
      return err;
    }
  };

  return { getResource, postResource };
};
