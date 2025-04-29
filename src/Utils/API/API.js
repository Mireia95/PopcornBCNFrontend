const url = 'http://localhost:3000/api/v1'; //!cambiar una vez desplegado el backend

export const API = async ({
  endpoint,
  method = 'GET',
  body,
  isJson = true,
  token = null
}) => {
  const headers = {
    Authorization: `Bearer ${token}`
  };
  if (isJson) {
    headers['Content-type'] = 'application/json';
  } else {
    null;
  }

  const res = await fetch(url + endpoint, {
    body: isJson ? JSON.stringify(body) : body,
    method,
    headers
  });

  const response = await res.json();

  return response;
};
