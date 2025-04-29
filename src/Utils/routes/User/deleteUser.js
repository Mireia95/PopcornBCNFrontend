import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayUsers } from '../../../Components/sections/Admin/AdminUsers/DisplayUsers';
import { printPageUser } from '../../../Pages/User/User';

import { API } from '../../API/API';

export const deleteUser = async (user) => {
  const token = JSON.parse(localStorage.getItem('token'));

  //le paso el id del comment que quiero eliminar
  const res = await API({
    endpoint: `/users/${user._id}`,
    method: 'DELETE',
    token: token
  });

  if (res.user) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user._id === res.user._id) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }

    let page = document.querySelector('#admin');
    if (page) {
      page = displayUsers;
    } else {
      //si lo importo normal me da error, porque esta funcion está llamada en DataHeader, y genero un bucle de dependencias. Por eso uso await import, para cargarlo solo cuando de verdad necesito ejecutarlo
      const { printPageUser } = await import('../../../Pages/User/User');
      page = printPageUser;
    }

    const confirmPopup = createConfirmPopup({
      texto: 'Cuenta eliminada correctamente!',
      button: true,
      page: page
    });

    const fatherPopup = document.querySelector('.confirmDelete');
    fatherPopup.innerHTML = '';
    fatherPopup.append(confirmPopup);
  } else {
    const pError = document.createElement('p');
    pError.innerText = `${res.message}`;
    pError.append(confPopup);
    console.log(res);
  }
};
