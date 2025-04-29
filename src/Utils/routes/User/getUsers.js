import { API } from '../../API/API';

//funcion para obtener la lista de users
export const getUsers = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await API({ endpoint: '/users', token: token });
  return response;
};
