import { API } from '../../API/API';

//funcion para obtener la lista de movies
export const getMovies = async () => {
  const response = await API({ endpoint: '/movies' }); //res.json seràn los movies
  return response;
};
