import { API } from '../API/API';

//delete screening
export const deleteScreening = async ({ screening, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));
  //le paso el id del comment que quiero eliminar
  const res = await API({
    endpoint: `/screenings/${screening._id}`,
    method: 'DELETE',
    token: token
  });
  return res;
};

//get screening by movie
export const getScreeningByMovie = async (movie) => {
  const response = await API({ endpoint: `/screenings/movie/${movie._id}` });
  return response;
};

//post screening
export const postScreening = async ({ body, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));

  const response = await API({
    endpoint: `/screenings`,
    method: 'POST',
    token: token,
    body
  });
  return response;
};

//edit screening
export const editScreening = async ({ screening, body, movie }) => {
  console.log('editScreening ejecutandose');
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await API({
    endpoint: `/screenings/${screening._id}`,
    method: 'PUT',
    body: body,
    isJson: true,
    token: token
  });
  return response;
};
