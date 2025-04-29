import { API } from '../../API/API';

//funcion para obtener la lista de cines
export const getCinemas = async () => {
  const cines = await API({ endpoint: '/cinemas' }); //responde seràn los cines
  return cines;
};
