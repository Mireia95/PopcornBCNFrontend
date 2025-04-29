import { API } from '../../API/API';

//funcion para obtener la lista de users
export const getUserById = async (id) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await API({ endpoint: `/users/${id}`, token: token });
  return response;
};
