import { createinputForm } from '../../../common/Form/FieldForm/InputForm/createInputForm';

import './LoginRegisterForm.css';
import './LoginRegisterFormResponsive.css';
import { doRegister } from '../Register/Register';
import { doLogin } from '../Login/Login';
import { createButton } from '../../../common/Button/GenericButton/Button';

export const LoginRegisterForm = (father, typeForm) => {
  father.innerHTML = ''; //limpio el elemento padre
  /*   en esa funcion le pasamos como parametro:
  -elemento padre
  -que tipo de form estamos creando (Login o Crear cuenta) */

  const h2 = document.createElement('h2');
  h2.innerText = typeForm; //le paso Login o Crear cuenta

  const form = document.createElement('form');
  form.classList.add('flexCenter', 'loginRegister');
  const username = createinputForm({
    labelText: 'Username',
    placeholder: 'Username'
  }); //creo label/input username
  const password = createinputForm({
    labelText: 'Contraseña',
    placeholder: '********',
    type: 'password'
  }); //creo label/input password
  const buttonSubmit = createButton({
    texto: typeForm,
    type: 'submit',
    clase: 'loginButton'
  }); //creo button submit del form

  form.append(username);

  //si typeForm = "Crear cuenta", añado el input del email
  if (typeForm === 'Crear cuenta') {
    const name = createinputForm({
      labelText: 'Nombre',
      placeholder: 'Nombre'
    });
    const surname = createinputForm({
      labelText: 'Apellido',
      placeholder: 'Apellido'
    });
    const email = createinputForm({
      labelText: 'Email',
      placeholder: 'ejemplo@gmail.com'
    });
    form.append(name, surname, email);
  }

  form.append(password, buttonSubmit);
  father.append(h2, form);

  //creo div para cambiar de form Login/Crear cuenta
  const divChangeForm = document.createElement('div');
  divChangeForm.classList.add('changeForm', 'flexCenter');

  const p = document.createElement('p');
  p.textContent =
    typeForm === 'Login' ? 'No tienes una cuenta?' : 'Tienes ya una cuenta?';

  const aChangeForm = document.createElement('a');
  aChangeForm.textContent = typeForm === 'Login' ? 'Registrate' : 'Login';
  aChangeForm.href = '#loginUser';

  aChangeForm.addEventListener('click', (e) => {
    if (typeForm === 'Login') {
      LoginRegisterForm(father, 'Crear cuenta'); //cambiamos a Crear cuenta
    } else {
      LoginRegisterForm(father, 'Login'); //cambiamos a Login
    }
  });

  //evento para el form
  form.addEventListener('submit', (e) => {
    if (typeForm === 'Crear cuenta') {
      doRegister(e);
    } else {
      doLogin({ e });
    }
  });

  divChangeForm.append(p, aChangeForm);

  father.append(divChangeForm);
};
