import { API } from '../../API/API';

//funcion para obtener la lista de screenings en nu movie
export const getScreeningByMovie = async (movie) => {
  const response = await API({ endpoint: `/screenings/movie/${movie._id}` });
  return response;
};
