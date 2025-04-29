import { API } from '../../API/API';

//funcion para obtener la lista de movies
export const getMovieById = async (id) => {
  const response = await API({ endpoint: `/movies/${id}` }); //res.json seràn los movies
  return response;
};
