import { createButton } from '../../../common/Button/GenericButton/Button';
import { createConfirmPopup } from '../../../common/Popup/ConfirmPopup/ConfirmPopup';
import { doLogin } from '../Login/Login';

import './ConfRegister.css';

//funcion popup de confirmacion de que se ha registrado correctamente el user
export const confRegister = (section, res, password) => {
  const div = createConfirmPopup({
    texto: 'Te has registrado correctamente!'
  });

  const buttAccess = createButton({ texto: 'Acceder', clase: 'darkButton' });

  buttAccess.addEventListener('click', () => {
    doLogin({ userLogin: res, password: password });
  });

  div.append(buttAccess);
  section.append(div);
};
