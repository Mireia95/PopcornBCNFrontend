import { API } from '../API/API';

//delete cinema
export const deleteCinema = async (cinema) => {
  const token = JSON.parse(localStorage.getItem('token'));
  //le paso el id del comment que quiero eliminar
  const response = await API({
    endpoint: `/cinemas/${cinema._id}`,
    method: 'DELETE',
    token: token
  });
  return response;
};

//edit cinema
export const editCinema = async ({ cinema, body }) => {
  const token = JSON.parse(localStorage.getItem('token'));

  const response = await API({
    endpoint: `/cinemas/${cinema._id}`,
    method: 'PUT',
    body: body,
    isJson: true,
    token: token
  });

  return response;
};

//post cinema
export const postCinema = async (body) => {
  const token = JSON.parse(localStorage.getItem('token'));

  const response = await API({
    endpoint: `/cinemas`,
    method: 'POST',
    token: token,
    body
  });

  return response;
};

//get cinemas
export const getCinemas = async () => {
  const response = await API({ endpoint: '/cinemas' }); //responde seràn los cines
  return response;
};
