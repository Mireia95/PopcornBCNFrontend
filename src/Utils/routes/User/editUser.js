import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayUsers } from '../../../Components/sections/Admin/AdminUsers/DisplayUsers';
import { printPageMovies } from '../../../Pages/Movies/Movies';
import { API } from '../../API/API';

//funcion para obtener la lista de users
export const editUser = async ({
  body,
  isJson = true,
  user,
  popup = true,
  page
}) => {
  console.log(body);

  const token = JSON.parse(localStorage.getItem('token'));
  const userSelected = user ? user : JSON.parse(localStorage.getItem('user')); //cuando es el admin a editar un user necesito que se pase por prop el user que queremos editar. Si no es admin lo cogemos del localStorage
  console.log(userSelected);
  const response = await API({
    endpoint: `/users/${userSelected._id}`,
    token: token,
    method: 'PUT',
    isJson: isJson,
    body: body
  });

  if (response.user) {
    //quiere decir que ha funcionadio la petición
    //si hemos cogido el user desde localstorage, entonces lo actualizamos:
    if (!user) {
      localStorage.setItem('user', JSON.stringify(response.user));
    }

    //busco si estamos en la page de admin
    const adminPage = document.getElementById('admin');
    if (adminPage) {
      document.querySelector('.form')?.remove(); //elimino el form
      if (popup) {
        //pinto el popup de confirmacion
        const popup = createConfirmPopup({
          texto: 'User editado correctamente!',
          button: true,
          page: displayUsers
        });
        adminPage.append(popup);
      }
    }

    //chequeo si estamos en la pagina de user:
    const userPage = document.getElementById('user');
    //si pasamos como prop page="userInfo" quiere decir que estamos actualizando la imagen de perfil, no los datos. Entonces no tengo que printear de nuevo la pagina.
    if (userPage && page !== 'UserInfo') {
      //si lo importo normal me da error, porque esta funcion está llamada en DataHeader, y genero un bucle de dependencias. Por eso uso await import, para cargarlo solo cuando de verdad necesito ejecutarlo
      const { printPageUser } = await import('../../../Pages/User/User');
      printPageUser();
    }
  } else {
    //ERROR
    //estamos en la pagina de user
    if (body.newPassword) {
      //estamos intentando actualizar la contraseña, estamos en el form del password
      const editPass = document.querySelector('.editPass > form');
      displayErrorRequest({ father: editPass, error: response.message });
    } else {
      //estamos en el form de "Mis datos"
      const editForm = document.querySelector('.form');
      displayErrorRequest({ father: editForm, error: response.message });
    }
  }
  return response;
};
