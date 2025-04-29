import { createButton } from '../GenericButton/Button';
import { ConfirmDeletePopup } from '../../Popup/ConfirmDeletePopup/ConfirmDeletePopup';

import './DeleteButton.css';

export const createDeleteButt = ({ textButt = '', textConfirm, element }) => {
  //el element que recibe por prop tiene que ser un objeto, por ejemplo:
  //element: {user: user}. En este caso puedo con un switch/case entender que le estoy pasando a element (si user, si movie, si screening, si comment)
  const button = createButton({
    texto: textButt ? `Eliminar ${textButt}` : '',
    clase: 'deleteButt',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1737130936/PopcornBCN/delete_hxr6er.png'
  });

  button.addEventListener('click', () => {
    //1 sale popup de confirmacion
    //chequea si ya existe el popup. Si ya está no hagas nada
    //el popup gestiona que elemento hay que eliminar, si le doy a ELIMINAR
    const popupConfDelete = document.querySelector('.confirmDelete');
    if (!popupConfDelete) {
      ConfirmDeletePopup({ textConfirm, element });
    }
  });
  return button;
};
