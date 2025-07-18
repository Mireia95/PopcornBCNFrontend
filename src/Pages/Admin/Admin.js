import { createAdminOption } from '../../Components/sections/Admin/AdminOption/AdminOption';
import { displayUsers } from '../../Components/sections/Admin/AdminUsers/DisplayUsers';
import { checkUserAndCleanEle } from '../../Utils/functions/checkUserAndCleanEle';
import { createSection } from '../../Utils/functions/createSection';
import './Admin.css';

export const printPageAdmin = () => {
  //limpio main y chequeo si user está logueado
  checkUserAndCleanEle({ element: 'main' });
  const section = createSection('main', 'admin', 'page');
  section.innerHTML = '<h2> ADMIN </h2>';
  section.classList.add('flexCenter');
  //creo opciones en la pagina
  const divOptions = document.createElement('div');
  divOptions.classList.add('adminOptions');

  section.append(divOptions);
  displayAdminOptions();
};

export const displayAdminOptions = () => {
  createAdminOption({
    title: 'USERS',
    text: 'Gestiona cualquier asunto o problema con los users',
    buttonText: 'Ver lista',
    funcion: displayUsers
  });
};
