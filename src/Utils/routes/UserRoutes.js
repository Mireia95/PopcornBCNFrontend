import { API } from '../API/API';

//delete user
export const deleteUser = async (user) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await API({
    endpoint: `/users/${user._id}`,
    method: 'DELETE',
    token: token
  });

  return res;
};

//edit user
export const editUser = async ({
  body,
  isJson = true,
  user,
  popup = true,
  page
}) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const userSelected = user ? user : JSON.parse(localStorage.getItem('user')); //cuando es el admin a editar un user necesito que se pase por prop el user que queremos editar. Si no es admin lo cogemos del localStorage
  const response = await API({
    endpoint: `/users/${userSelected._id}`,
    token: token,
    method: 'PUT',
    isJson: isJson,
    body: body
  });
  return response;
};

//get user by id
export const getUserById = async (id) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await API({ endpoint: `/users/${id}`, token: token });
  return response;
};

//get users
export const getUsers = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await API({ endpoint: '/users', token: token });
  return response;
};
