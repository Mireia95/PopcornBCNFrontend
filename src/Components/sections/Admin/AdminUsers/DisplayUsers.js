import { printPageAdmin } from '../../../../Pages/Admin/Admin';
import { getUsers } from '../../../../Utils/routes/User/getUsers';
import { createBackButton } from '../../../common/Button/BackButton/BackButton';
import { createButton } from '../../../common/Button/GenericButton/Button';
import { displayErrorRequest } from '../../../common/Form/ErrorRequest/ErrorRequest';

import { createLineUser } from '../AdminUsers/CreateLineUser/CreateLineUser';
import './DisplayUsers.css';

export const displayUsers = async () => {
  //chequeo si está el popup de confirmacion de eliminar el user, por si se acaba de borrar alguno
  document.querySelector('.confirmDelete')?.remove();
  const adminPage = document.getElementById('admin');

  //Cuando eliminamos o editamos un user, necesito volver a cargar esta section #userList. Para evitar que se duplique cada vez, chequeo si está. Si está la vacio)
  let sectionUsers = document.getElementById('userList');
  if (sectionUsers) {
    sectionUsers.innerHTML = '';
  } else {
    sectionUsers = document.createElement('section');
    sectionUsers.id = 'userList';
  }

  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebarUsers', 'flexCenter');

  const h2 = document.createElement('h2');
  h2.innerText = 'Lista Users';

  const divSearch = document.createElement('div');
  divSearch.classList.add('flexCenter');
  const buttSearch = createButton({
    clase: 'buttSearch',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1714418571/ROCKTHECODE/iconos/lupa_kng4s1.png'
  });
  buttSearch.classList.add('flexCenter');

  const inputSearch = document.createElement('input'); //!usar component para crear inputs
  inputSearch.type = 'text';

  //pinto el titulo + la sidebar con el input para buscar el user
  divSearch.append(inputSearch, buttSearch);
  sidebar.append(h2, divSearch);
  sectionUsers.append(sidebar);

  //pinto los titulos de mi lista de user
  createLineUser({
    name: 'Nombre',
    username: 'Username',
    email: 'Email',
    type: 'h3',
    father: sectionUsers,
    role: 'Role'
  });

  //pinto los users haciendo la petición con API a la funcion getUsers
  const users = await getUsers();

  //si esta el loading lo quito
  const loading = document.querySelector('.loading');
  if (loading) {
    loading.remove();
  }

  if (users.message) {
    //pinta un p de error, no puedes acceder
    displayErrorRequest({ father: sectionUsers, error: users.message });
  } else {
    //obtenido los users ,los pintamos
    for (const user of users) {
      createLineUser({
        name: `${user.name} ${user.surname}`,
        username: user.username,
        email: user.email,
        type: 'p',
        father: sectionUsers,
        role: user.role,
        user
      });
    }
  }

  //button volver, check si ya estaba pintado
  let backButton = document.querySelector('.backButton');
  if (!backButton) {
    backButton = createBackButton({
      clean: '#admin',
      funcion: printPageAdmin,
      header: false,
      logo: false
    });
  }

  adminPage.append(sectionUsers, backButton);
};
